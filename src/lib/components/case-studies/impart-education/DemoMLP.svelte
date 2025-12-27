<script lang="ts">
    import { GraphController } from "./graphing";
    import { Matrix } from "./math"
    import { sleep } from "$lib/helpers/sleep";
    import { onMount } from "svelte";

    let graphController: GraphController;
    let graph: HTMLDivElement;

    class PointClassifier {
        // Configuration for automatic ETA
        initial_eta = 0.5;
        decay_rate = 0.05;
        epoch = 0;
        
        eta = $state(0.5);
        train = $state(false);

        layer_count: number;
        sizes = [2, 3, 2];
        weights: Matrix[] = $state([]);
        biases: Matrix[] = $state([]);

        constructor() {
            this.layer_count = this.sizes.length;
            this.eta = this.initial_eta;
            
            for (let i = 0; i < this.layer_count - 1; i++) {
                const fanIn  = this.sizes[i];
                const fanOut = this.sizes[i + 1];

                this.weights.push(
                    new Matrix(fanOut, fanIn, () => 0)
                )
                this.biases.push(
                    new Matrix(fanOut, 1, () => 0)
                )
            }
        }

        static activationFunction(z: number) {
            return 1 / (1 + Math.exp(-z));
        }

        static activationFunctionDerivative(z: number) {
            let a = PointClassifier.activationFunction(z);
            return a * (1 - a);
        }

        /**
         * Optimized inference for Rendering (Zero Allocation)
         * Computes output[1] - output[0] directly using raw numbers
         */
        predictDifference(x: number, y: number): number {
            // Layer 1: Input -> Hidden (size 3)
            // We use a small fixed-size array to avoid heap allocation if possible, 
            // but JS engines optimize small arrays well.
            let h0 = 0, h1 = 0, h2 = 0;
            
            // Unrolling loops for specific [2, 3, 2] architecture or using generic loop
            // Generic loop for robustness, but optimized access:
            
            // --- Input to Hidden ---
            const w1 = this.weights[0];
            const b1 = this.biases[0];
            
            // Neuron 0
            let z = (w1.get(0, 0) * x) + (w1.get(0, 1) * y) + b1.get(0, 0);
            h0 = 1 / (1 + Math.exp(-z));

            // Neuron 1
            z = (w1.get(1, 0) * x) + (w1.get(1, 1) * y) + b1.get(1, 0);
            h1 = 1 / (1 + Math.exp(-z));

            // Neuron 2
            z = (w1.get(2, 0) * x) + (w1.get(2, 1) * y) + b1.get(2, 0);
            h2 = 1 / (1 + Math.exp(-z));

            // --- Hidden to Output ---
            const w2 = this.weights[1];
            const b2 = this.biases[1];

            // Output 0
            z = (w2.get(0, 0) * h0) + (w2.get(0, 1) * h1) + (w2.get(0, 2) * h2) + b2.get(0, 0);
            const o0 = 1 / (1 + Math.exp(-z));

            // Output 1
            z = (w2.get(1, 0) * h0) + (w2.get(1, 1) * h1) + (w2.get(1, 2) * h2) + b2.get(1, 0);
            const o1 = 1 / (1 + Math.exp(-z));

            return o1 - o0;
        }

        /**
         * Optimized Cost Calculation (Reduced Allocation)
         */
        calculateCost(points: Matrix[], labels: Matrix[]): number {
            let totalCost = 0;
            const w1 = this.weights[0], b1 = this.biases[0];
            const w2 = this.weights[1], b2 = this.biases[1];

            for (let i = 0; i < points.length; i++) {
                const x = points[i].get(0, 0);
                const y = points[i].get(1, 0);
                
                // --- Forward Pass (Manually inlined for speed) ---
                // Hidden
                const z_h0 = (w1.get(0, 0) * x) + (w1.get(0, 1) * y) + b1.get(0, 0);
                const h0 = 1 / (1 + Math.exp(-z_h0));

                const z_h1 = (w1.get(1, 0) * x) + (w1.get(1, 1) * y) + b1.get(1, 0);
                const h1 = 1 / (1 + Math.exp(-z_h1));

                const z_h2 = (w1.get(2, 0) * x) + (w1.get(2, 1) * y) + b1.get(2, 0);
                const h2 = 1 / (1 + Math.exp(-z_h2));

                // Output
                const z_o0 = (w2.get(0, 0) * h0) + (w2.get(0, 1) * h1) + (w2.get(0, 2) * h2) + b2.get(0, 0);
                const o0 = 1 / (1 + Math.exp(-z_o0));

                const z_o1 = (w2.get(1, 0) * h0) + (w2.get(1, 1) * h1) + (w2.get(1, 2) * h2) + b2.get(1, 0);
                const o1 = 1 / (1 + Math.exp(-z_o1));

                // --- Error Calculation ---
                const target0 = labels[i].get(0, 0);
                const target1 = labels[i].get(1, 0);

                const diff0 = target0 - o0;
                const diff1 = target1 - o1;

                // Magnitude
                totalCost += Math.sqrt(diff0 * diff0 + diff1 * diff1);
            }
            
            return Math.round((totalCost * 10000) / points.length) / 10000;
        }

        feedforward(a: Matrix) {
            for (let i = 0; i < this.layer_count - 1; i++) {
                let z = this.weights[i].multiply(a).add(this.biases[i]);
                a = z.applyFunction(PointClassifier.activationFunction);
            }
            return a;
        }

        costDerivative(output_activations: Matrix, y: Matrix) {
            return output_activations.subtract(y);
        }

        async toggleTraining(points: Matrix[], labels: Matrix[]) {
            this.train = !this.train;
            
            if (this.train) {
                await this.stochasticGradientDescent(points, labels);
            }
        }

        async stochasticGradientDescent(points: Matrix[], labels: Matrix[]) {
            // Reuse indices array
            const indices = Array.from({ length: points.length }, (_, i) => i);
            const batchSize = 30; 
            const numBatches = Math.ceil(points.length / batchSize);

            while (this.train) {
                // Fisher-Yates shuffle (In-place)
                for (let i = indices.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [indices[i], indices[j]] = [indices[j], indices[i]];
                }
                
                for (let b = 0; b < numBatches && this.train; b++) {
                    const batchStart = b * batchSize;
                    const batchEnd = Math.min((b + 1) * batchSize, points.length);
                    
                    // Slice is cheap enough for batching
                    const batchIndices = indices.slice(batchStart, batchEnd);
                    const batchPoints = batchIndices.map(i => points[i]);
                    const batchLabels = batchIndices.map(i => labels[i]);
                    
                    this.updateMiniBatch(batchPoints, batchLabels);
                }

                this.epoch++;
                this.eta = this.initial_eta / (1 + this.decay_rate * this.epoch);

                update();
                await sleep(20);
            }
        }

        updateMiniBatch(points: Matrix[], labels: Matrix[]) {
            let nabla_b: Matrix[] = [];
            let nabla_w: Matrix[] = [];
            
            // Initialization
            for (let i = 0; i < this.biases.length; i++) {
                nabla_b.push(new Matrix(this.biases[i].rows, this.biases[i].cols));
                nabla_w.push(new Matrix(this.weights[i].rows, this.weights[i].cols));
            }

            // Accumulate Gradients
            for (let i = 0; i < points.length; i++) {
                let x = points[i];
                let y = labels[i];
                let { nabla_b: delta_nabla_b, nabla_w: delta_nabla_w } = this.backprop(x, y);

                for (let j = 0; j < this.layer_count - 1; j++) {
                    // Optimization: We could optimize Matrix.add to be in-place, 
                    // but for now we trust the Matrix optimization from previous step.
                    nabla_b[j] = nabla_b[j].add(delta_nabla_b[j]);
                    nabla_w[j] = nabla_w[j].add(delta_nabla_w[j]);
                }
            }

            // Update Weights & Biases
            const rate = this.eta / points.length;
            const scalarFunc = (z: number) => z * rate;

            for (let i = 0; i < this.layer_count - 1; i++) {
                this.biases[i] = this.biases[i].subtract(nabla_b[i].applyFunction(scalarFunc));
                this.weights[i] = this.weights[i].subtract(nabla_w[i].applyFunction(scalarFunc));
            }
        }

        backprop(x: Matrix, y: Matrix) {
            let layer_activations = [x];
            let layer_zs: Matrix[] = [];
            
            // Forward pass for storage
            for (let i = 0; i < this.layer_count - 1; i++) {
                let z = this.weights[i].multiply(layer_activations[i]).add(this.biases[i]);
                layer_zs.push(z);
                layer_activations.push(z.applyFunction(PointClassifier.activationFunction));
            }

            let error = this.costDerivative(layer_activations[this.layer_count - 1], y)
            let nabla_b: Matrix[] = new Array(this.layer_count - 1);
            let nabla_w: Matrix[] = new Array(this.layer_count - 1);

            for (let i = this.layer_count - 2; i >= 0; i--) {
                error = error.hadamard_product(layer_zs[i].applyFunction(PointClassifier.activationFunctionDerivative));
                nabla_w[i] = error.multiply(layer_activations[i].transpose());
                nabla_b[i] = error;
                
                if (i > 0) {
                    error = this.weights[i].transpose().multiply(error);
                }
            }

            return { nabla_b, nabla_w };
        }

        private random(fanIn: number, fanOut: number): () => number {
            const limit = Math.sqrt(6 / (fanIn + fanOut));
            return () => (Math.random() * 2 - 1) * limit;
        }

        randomize() {
            this.weights = [];
            this.biases  = [];
            this.epoch = 0;
            this.eta = this.initial_eta;

            for (let i = 0; i < this.layer_count - 1; i++) {
                const fanIn  = this.sizes[i];
                const fanOut = this.sizes[i + 1];

                this.weights.push(new Matrix(fanOut, fanIn, this.random(fanIn, fanOut)));
                this.biases.push(new Matrix(fanOut, 1, this.random(fanIn, fanOut)));
            }

            update();
        }
    }

    let nn = new PointClassifier();
    let cost = $state(0);

    const generateData = () => {
        let x = 10*Math.random();
        let y = 10*Math.random();
        let point = new Matrix(2).set(x, 0).set(y, 1);

        let label = 4*(x-5)*(x-5) - 4*(x-5)*(y-5) + y*y < 50
            ? new Matrix(2).set(1, 0)
            : new Matrix(2).set(1, 1);
        
        return { point, label }
    }

    let points: Matrix[] = [];
    let labels: Matrix[] = [];
    // Data gen
    for (let i = 0; i < 1000; i++) {
        let { point, label } = generateData();
        points.push(point);
        labels.push(label);
    }

    const update = () => {
        // Use optimized predictDifference (Zero Allocation)
        graphController.drawFunctionGraph({
            contourFunction: (x: number, y: number) => nn.predictDifference(x, y),
            isovalue: 0,
        }, true);
        
        // Use optimized cost calculation
        cost = nn.calculateCost(points, labels);
    };

    onMount(async () => {
        graphController = new GraphController(graph, {
            axisPosition: "bottom-left"
        });
        
        await graphController.init();
        
        // Initial Cost
        cost = nn.calculateCost(points, labels);

        for (let i = 0; i < points.length; i++) {
            let point = points[i];
            let label = labels[i];

            graphController.plotPoint({
                x: point.get(0),
                y: point.get(1)
            }, label.get(0) === 1 ? 0x5EA3FF : 0xFF4040, 3);
        }

        nn.randomize()
    });
</script>

<div class="w-full md:w-1/2 flex flex-col gap-4">
    <div class="relative bg-neutral-950 rounded-2xl border border-white/10 p-1 shadow-2xl shadow-red-900/5 group">
        <div class="absolute inset-0 bg-gradient-to-tr from-red-500/5 to-transparent rounded-2xl pointer-events-none"></div>
        <div bind:this={graph} class="w-full aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-white/5 relative z-10"></div>
    </div>

    <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-4 flex flex-col gap-4 backdrop-blur-sm">
        <div class="flex justify-between items-center border-b border-white/5 pb-3">
            <div class="flex flex-col">
                <span class="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">Network Status</span>
                <span class="text-sm font-medium text-white flex items-center gap-2">
                    <span class="h-2 w-2 rounded-full {nn.train ? 'bg-green-500 animate-pulse' : 'bg-neutral-600'}"></span>
                    {nn.train ? "Learning Patterns..." : "Awaiting Input"}
                </span>
            </div>
            <div class="text-right">
                <span class="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block">Cost Function</span>
                <span class="font-mono text-sm text-red-400">{cost.toFixed(4)}</span>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
            <button 
                onclick={async () => await nn.toggleTraining(points, labels)} 
                class="flex-1 px-4 py-3 flex justify-center items-center gap-2 font-bold rounded-lg transition-all
                {nn.train 
                    ? 'bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700' 
                    : 'bg-red-600 text-white hover:bg-red-500 shadow-[0_0_20px_-5px_rgba(220,38,38,0.4)]'}"
            >
                {#if nn.train}
                    <span class="w-3 h-3 bg-white rounded-sm"></span> Stop Training
                {:else}
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> Start Training
                {/if}
            </button>
            
            <button 
                onclick={() => nn.randomize()} 
                class="px-4 py-3 text-sm font-medium text-neutral-400 hover:text-white border border-white/5 bg-neutral-950/50 hover:bg-neutral-900 rounded-lg transition-colors flex items-center gap-2 justify-center"
            >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                Reset
            </button>
        </div>

        <div class="flex justify-between items-center text-[10px] text-neutral-600 font-mono px-1">
            <span>LR: {nn.eta.toFixed(5)}</span>
            <span>EPOCH: {nn.epoch}</span>
        </div>
    </div>
</div>