<script lang="ts">
    import DemoMLP from "$lib/components/case-studies/impart-education/DemoMLP.svelte";
    import { navState } from "$lib/components/navigation/nav-state.svelte";
    import OnMount from "$lib/components/OnMount.svelte";
    import Showcase from "$lib/components/Showcase.svelte";
    import { fly } from "svelte/transition";

    const testimonials = [
        {
            name: "Alex Rivera",
            role: "Self-Taught Dev",
            initials: "AR",
            quote: "I’ve spent years in tutorial hell. Impart’s approach to memory management was the first time the concepts actually 'clicked' for me.",
            color: "from-red-600 to-orange-600"
        },
        {
            name: "Jordan Smith",
            role: "Software Engineer",
            initials: "JS",
            quote: "The production value here is insane. It’s like watching a high-end documentary, but you can actually play with the code as it runs.",
            color: "from-zinc-700 to-zinc-900"
        }
    ];

    navState.sections = [
        { id: "overview", label: "Overview" },
        { id: "highlights", label: "Highlights" },
        { id: "context", label: "Context" },
        { id: "problem", label: "The Problem" },
        { id: "challenge", label: "The Challenge" },
        { id: "principles", label: "Principles" },
        { id: "backbone", label: "The Backbone" },
        { id: "iteration", label: "Iteration" },
        { id: "solution", label: "The Solution" },
        { id: "impact", label: "Impact" }
    ];
</script>

<OnMount>
    <div class="w-full min-h-screen absolute top-0 gradient-bg"></div>
    <div in:fly={{ y: 200, duration: 1300 }} class="text-[#e5e5e5] min-h-screen pt-44 pb-24">
        
        <!-- Hero Section -->
        <section id="overview" class="max-w-6xl mx-auto px-6">
            <header class="text-center mb-16">
                <h1 class="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4 italic">Impart Education</h1>
                <p class="text-neutral-500 text-lg uppercase tracking-widest font-light">From Concept to Presale</p>
                <p class="text-neutral-600 text-sm mt-4 font-medium">Full Stack Engineer — May 2025</p>
            </header>

            <!-- Main Showcase -->
            <Showcase showBrowserChrome>
                {#snippet children()}
                    <!-- Impart Landing Page Mock -->
                    <div class="w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden pt-20 p-8">
                        <!-- BG Glow -->
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/10 blur-[100px] rounded-full"></div>

                        <!-- Nav -->
                        <nav class="absolute top-6 left-10 flex items-center gap-6 z-10">
                            <div class="flex items-center gap-2 font-black tracking-tighter text-xl text-white">
                                <span class="text-red-600">|</span>IMPART
                            </div>
                        </nav>

                        <!-- Hero Content -->
                        <div class="text-center z-10 max-w-xl">
                            <div class="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                                <span class="flex h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                                <span class="text-orange-300 text-[10px] font-bold uppercase tracking-wider">Presale Live</span>
                            </div>
                            <h2 class="text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                                Computer Science, <br />
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Decoded.</span>
                            </h2>
                            <p class="text-neutral-400 text-sm leading-relaxed mb-8 px-10">
                                We're building the curriculum we wish we had.
                                Deep theory taught with the visual clarity of a world-class production.
                            </p>
                            <button class="px-8 py-3 bg-white text-black rounded-lg font-bold text-sm hover:scale-105 transition-transform">
                                Pre-order Course ($24)
                            </button>
                        </div>

                        <!-- Twirling Tiles Placeholder (Visual Hook) -->
                        <div class="mt-12 flex gap-2">
                           {#each Array(5) as _, i}
                                <div class="w-8 h-32 bg-gradient-to-b from-red-500/20 to-transparent border-t border-red-500/40 rounded-full"
                                     style="animation: wave 2s ease-in-out infinite {i * 0.2}s"></div>
                           {/each}
                        </div>
                    </div>
                {/snippet}

                {#snippet leftCard()}
                    <div class="flex items-center gap-2 mb-4">
                        <div class="p-2 rounded bg-red-500/10 border border-red-500/20 text-red-500">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                        </div>
                        <span class="text-xs font-mono text-neutral-500 uppercase tracking-widest">Unit 01</span>
                    </div>
                    <p class="text-sm font-bold mb-2 text-white">The Foundations</p>
                    <p class="text-[11px] text-neutral-400 leading-relaxed mb-6">
                        Master the building blocks: Functions, Variables, Conditionals, and Loops.
                    </p>
                    <div class="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                        <div class="h-full w-1/3 bg-red-500"></div>
                    </div>
                    <div class="flex justify-between mt-2">
                        <span class="text-[9px] text-red-500 font-bold uppercase">Free Preview</span>
                        <span class="text-[9px] text-neutral-600">33% Complete</span>
                    </div>
                {/snippet}

                {#snippet rightCard()}
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <span class="text-red-500 font-bold tracking-wider text-[10px] uppercase mb-1 block">Presale Pricing</span>
                            <div class="flex items-baseline gap-2">
                                <span class="text-3xl font-bold text-white">$24</span>
                                <span class="text-sm text-neutral-500 line-through">$95</span>
                            </div>
                        </div>
                        <div class="bg-red-500/10 text-red-400 text-[9px] font-bold px-2 py-1 rounded border border-red-500/20">
                            75% OFF
                        </div>
                    </div>

                    <ul class="space-y-3 mb-6">
                        {#each ['Lifetime access', 'Discord access', 'Interactive Labs'] as feat}
                        <li class="flex items-center gap-2 text-[10px] text-neutral-300 font-medium">
                            <svg class="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                            {feat}
                        </li>
                        {/each}
                    </ul>

                    <button class="w-full py-2 bg-neutral-100 hover:bg-white text-black text-xs font-bold rounded transition-colors">
                        Lock in Price
                    </button>
                {/snippet}
            </Showcase>

            <!-- Project Meta -->
            <div class="max-w-4xl mx-auto mt-8 grid md:grid-cols-3 gap-8 border-t border-neutral-900 pt-12">
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Scope</h3>
                    <p class="text-sm text-neutral-400">Full-stack Platform Development & Curriculum Design</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Timeline</h3>
                    <p class="text-sm text-neutral-400">4 Months (Discovery to Pre-sale Launch)</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Stack</h3>
                    <p class="text-sm text-neutral-400">Node.js, SvelteKit, Tailwind CSS, PostgreSQL, TypeScript, Figma, Stripe</p>
                </div>
            </div>

            <!-- Overview Text -->
            <div class="max-w-4xl mx-auto space-y-6 mt-16 text-neutral-300 leading-relaxed">
                <p class="text-lg">
                    How do you sell a course that doesn't exist yet? This was the challenge I faced with Impart Education.
                    As an unknown creator with no track record, I needed to convince people to pay upfront for a vision of
                    better technical education. Most presales rely on polished mockups and marketing promises. I took a
                    different approach: <span class="text-white font-bold">I built the product first.</span>
                </p>

                <p class="text-lg">
                    Over four months, I created a complete demo course—Neural Networks from Scratch—to prove the concept.
                    This wasn't a teaser or a sample lesson. It was a fully functional, interactive learning experience
                    featuring custom-built visualizations, GPU-accelerated graphics, and a teaching methodology that made
                    complex concepts intuitive. The demo course became the centerpiece of my presale strategy: if people
                    could see and interact with the real thing, they wouldn't need to trust promises. They could trust
                    the evidence.
                </p>

                <p class="text-lg">
                    The presale was actually for a different course, Introduction to Programming, but the neural networks
                    demo showcased what made Impart different. It combined three elements that had to work in harmony:
                    exceptional course content (2+ months of curriculum design), cutting-edge interactive platform features
                    (PixiJS visualizations, custom graphing library), and professional design that signaled credibility.
                    The result: we reached our funding goal the week of the launch.
                </p>
            </div>
        </section>

        <!-- 01. HIGHLIGHTS -->
        <section id="highlights" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">01. Highlights</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Three pillars of a successful presale.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The presale success came from balancing three elements: a complete demo course that proved the teaching methodology,
                a cutting-edge interactive platform that showcased technical innovation, and professional design that built trust
                and credibility with potential customers.
            </p>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">The Demo Course</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">Neural Networks from Scratch served as proof of concept. Interactive demos let students manually adjust weights and biases to understand that training is just optimization. This makes gradient descent intuitive rather than mysterious.</p>
                </div>

                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">The Interactive Platform</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">Built on PixiJS with GPU acceleration and a custom graphing library, the neural network visualizer rendered decision boundaries and gave real-time predictions.</p>
                </div>

                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">The Professional Polish</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">Typography, spacing, and animations were made to give a premium feel to the platform. The design signaled credibility and trustworthiness. This was especially essential for an unknown creator asking people to pay upfront for a course that didn't exist yet.</p>
                </div>
            </div>
        </section>

        <!-- 02. CONTEXT -->
        <section id="context" class="max-w-6xl mx-auto px-6 py-24">
            <div class="bg-neutral-900 border border-neutral-800 rounded-3xl p-12 relative overflow-hidden">
                <div class="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 blur-3xl rounded-full"></div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">02. Context</h3>
                <h2 class="text-3xl font-medium text-white mb-8">People were willing to pay good prices for great courses.</h2>

                <p class="text-neutral-400 leading-relaxed mb-6 max-w-3xl relative z-10">
                    I was solving my own problem. I always preferred online courses over traditional college education, spending countless hours on MOOCs and platforms like Udemy. But I kept hitting the same wall: courses that were dated, clunky, and frustrating to use. Meanwhile, platforms like edX and Coursera were charging premium prices for certificates rather than comprehension.
                </p>

                <p class="text-neutral-400 leading-relaxed mb-12 max-w-3xl relative z-10">
                    Before building anything, I spent weeks in online communities researching what actually frustrated learners. I noticed a recurring pattern: people wanted to self-study college-level computer science courses and were willing to invest in quality education when they could see real value. People buy expensive textbooks and course certificates. The problem wasn't the price but the product. Traditional learning material promised to teach concepts but didn't deliver everything they were seeking.
                </p>

                <div class="mt-12 p-8 bg-red-500/5 border border-red-500/20 rounded-xl relative z-10">
                    <h4 class="text-red-500 font-bold mb-3 text-sm uppercase tracking-wider">The Insight</h4>
                    <p class="text-neutral-300 leading-relaxed">
                        People were willing to pay good prices for great courses, if I could prove it what I was offering was real. The presale strategy became clear: build a complete demo course that showcased the methodology, then ask people to fund the full curriculum. If the demo delivered on the promise of an intuitive premium learning, the presale would fund itself. If it didn't, I'd know before wasting months building the wrong thing.
                    </p>
                </div>
            </div>
        </section>

        <!-- 03. THE PROBLEM -->
        <section id="problem" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">03. The Problem</h3>
            <h2 class="text-4xl font-medium text-white mb-8">The presale paradox: proving quality before it exists.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                Launching a presale as an unknown creator meant solving three interconnected challenges: establishing credibility
                without a track record, choosing the right demo to showcase the methodology, and delivering something complete
                without building the entire product first.
            </p>

            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <h4 class="text-white font-bold text-sm">Proving Quality Without Track Record</h4>
                    </div>
                    <p class="text-sm text-neutral-400 leading-relaxed">
                        How do you convince people to pay upfront for a course that doesn't exist from a creator they've never heard of? Marketing copy wouldn't cut it. I needed to show, not tell—which meant building real, working software before asking for money.
                    </p>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <h4 class="text-white font-bold text-sm">Building the Right Demo</h4>
                    </div>
                    <p class="text-sm text-neutral-400 leading-relaxed">
                        The demo topic needed to be impressive enough to wow people but complex enough to showcase the teaching methodology. Too simple and it wouldn't demonstrate the value. Too complex and it would take months to build. Neural networks hit the sweet spot.
                    </p>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <h4 class="text-white font-bold text-sm">Balancing Scope and Timeline</h4>
                        </div>
                    <p class="text-sm text-neutral-400 leading-relaxed">
                        I couldn't spend a year building the full Introduction to Programming curriculum before validating demand. But a half-baked demo would undermine trust. The solution: ship one complete, polished module that proved the concept definitively.
                    </p>
                </div>
            </div>
        </section>

        <!-- 04. THE CHALLENGE -->
        <section id="challenge" class="max-w-6xl mx-auto py-24 px-6">
            <div class="bg-neutral-900 border border-neutral-800 rounded-3xl p-12 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-3xl rounded-full"></div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">04. The Challenge</h3>
                <h2 class="text-3xl font-medium text-white mb-12 max-w-2xl leading-tight">
                    Build a demo course compelling enough to fund the development of the real product—without knowing if anyone would actually pay for it.
                </h2>
            </div>
        </section>

        <!-- 05. NORTH STAR PRINCIPLES -->
        <section id="principles" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">05. Principles</h3>
            <h2 class="text-4xl font-medium text-white mb-8">I established three non-negotiables for the demo.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The Neural Networks from Scratch demo course had to prove the concept definitively. This would either validate the methodology or reveal its flaws before the presale.
            </p>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-red-500/20 mb-4">01</div>
                        <h4 class="text-white font-bold text-xl mb-4">Interactive Textbook</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            It's like an interactive textbook. Video has not yet been added, but the written content and interactive elements create a hands-on learning experience.
                        </p>
                    </div>
                </div>

                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-red-500/20 mb-4">02</div>
                        <h4 class="text-white font-bold text-xl mb-4">Curiosity-Driven Learning</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            Interactive demos are supposed to be interesting and raise natural questions that we address in the following sections.
                        </p>
                    </div>
                </div>

                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-red-500/20 mb-4">03</div>
                        <h4 class="text-white font-bold text-xl mb-4">Premium Aesthetic</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            Premium aesthetic. High-quality design, intentional spacing, and polished visuals signal credibility and create an elevated learning experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 06. THE BACKBONE -->
<!-- Interactive Lab Concept -->
        <section class="max-w-6xl mx-auto px-6 py-24">
            <div class="bg-neutral-900 border border-neutral-800 rounded-[2.5rem] overflow-hidden relative">
                <!-- Ambient background glow -->
                <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
                
                <div class="p-8 md:p-14 relative z-10">
                    <div class="flex flex-col lg:flex-row gap-16 items-start">
                        <!-- Left Column: The Interactive Lab UI -->
                        <DemoMLP />

                        <!-- Right Column: Technical Documentation -->
                        <div class="w-full lg:w-1/2 order-1 lg:order-2">
                            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">The Technical Backbone</h3>
                            <h2 class="text-4xl font-medium text-white mb-6">Building the Visualizer.</h2>
                            
                            <div class="space-y-8">
                                <div>
                                    <h5 class="text-white font-bold text-lg mb-3">The Tech Stack Decision</h5>
                                    <p class="text-neutral-400 leading-relaxed text-sm">
                                        I needed to make sure I could render render complex network visualizations. PixiJS provided WebGL support with graceful fallback to Canvas. Existing graphing libraries were too heavy, so I built a custom one on top of PixiJS for precise control.
                                    </p>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div class="bg-neutral-800/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
                                        <div class="text-red-500 mb-3">
                                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                        </div>
                                        <h6 class="text-white font-bold text-xs mb-2 uppercase tracking-wide">Svelte Reactive Layer</h6>
                                        <p class="text-[11px] text-neutral-500 leading-relaxed">State management automatically re-renders visualizations.</p>
                                    </div>
                                    <div class="bg-neutral-800/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
                                        <div class="text-red-500 mb-3">
                                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                                        </div>
                                        <h6 class="text-white font-bold text-xs mb-2 uppercase tracking-wide">Custom Matrix Math</h6>
                                        <p class="text-[11px] text-neutral-500 leading-relaxed">Implemented forward/backward propagation in TypeScript for educational transparency.</p>
                                    </div>
                                </div>

                                <div class="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl relative overflow-hidden group">
                                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <svg class="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                                    </div>
                                    <h6 class="text-red-500 font-bold text-sm mb-2 uppercase tracking-wider">The Performance Challenge</h6>
                                    <p class="text-xs text-neutral-400 leading-relaxed relative z-10">
                                        Rendering neurons all of their connections while running real-time predictions was the biggest technical hurdle. By batching draw calls and using GPU acceleration, we maintained smooth performance even on modest hardware.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- 07. ITERATION & REFINEMENT -->
        <section id="iteration" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">07. Iteration & Refinement</h3>
            <h2 class="text-4xl font-medium text-white mb-8">The hand-wired breakthrough.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The defining moment in the demo's development came from iterating on how to teach neural networks. Early versions
                abstracted away too much—students followed along but didn't truly understand. The solution was counterintuitive:
                make students work harder, not less.
            </p>

            <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden mb-12">
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/5 blur-3xl rounded-full"></div>

                <!-- Placeholder for iteration screenshots -->
                <div class="grid md:grid-cols-2 gap-8 mb-8 relative z-10">
                    <div>
                        <div class="bg-neutral-950 border border-white/5 rounded-xl aspect-video mb-4 flex items-center justify-center">
                            <div class="text-center">
                                <div class="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                                </div>
                                <p class="text-neutral-600 text-xs">V1: The "Black Box" Approach</p>
                            </div>
                        </div>
                        <h4 class="text-white font-bold mb-2">The Abstract Model</h4>
                        <p class="text-sm text-neutral-400 mb-2">High-level network diagrams with automated training. Students watched the network learn but couldn't interact with individual parameters.</p>
                        <p class="text-xs text-red-400 font-bold">Feedback: "I feel like I'm magic-ing it. I don't know what weights or biases actually do."</p>
                    </div>

                    <div>
                        <div class="bg-neutral-950 border border-white/5 rounded-xl aspect-video mb-4 flex items-center justify-center">
                            <div class="text-center">
                                <div class="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                </div>
                                <p class="text-neutral-600 text-xs">V2: The "Hand-Wired" Approach</p>
                            </div>
                        </div>
                        <h4 class="text-white font-bold mb-2">The Atomic Model</h4>
                        <p class="text-sm text-neutral-400 mb-2">Students started with a single neuron, manually adjusting weights and bias to minimize error. They saw immediate visual feedback: decision boundary shifts, loss changes, prediction updates.</p>
                        <p class="text-xs text-green-400 font-bold">Feedback: "Now I understand what a 'bias' actually does—it shifts the decision boundary!"</p>
                    </div>
                </div>

                <div class="p-8 bg-green-500/5 border border-green-500/20 rounded-xl relative z-10 mb-8">
                    <h4 class="text-green-500 font-bold mb-3 text-sm uppercase tracking-wider">The Aha Moment</h4>
                    <p class="text-neutral-300 leading-relaxed mb-4">
                        By having students manually adjust a single neuron's weights to reduce error, they experienced the fundamental insight: <span class="text-white font-bold">training is just optimization.</span> Gradient descent became intuitive, not mysterious—they'd already done it manually with sliders. Automation just scaled what they understood.
                    </p>
                    <p class="text-neutral-300 leading-relaxed">
                        The feedback loop was immediate: adjust weight → see decision boundary shift → see loss change → see prediction update. This multi-sensory reinforcement made abstract math concrete. It also proved the interactive visualizer wasn't just eye candy—it was pedagogically essential.
                    </p>
                </div>

                <div class="relative z-10">
                    <h4 class="text-white font-bold text-lg mb-4">Building the Interactive Controls</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed mb-6">
                        The UI challenge was making weight adjustment intuitive without overwhelming users. I tested sliders, dials, and direct manipulation. Sliders won for precision, but I added real-time visual feedback to every interaction—highlighting the active neuron, animating the decision boundary transform, and updating the loss graph simultaneously.
                    </p>
                    <div class="grid md:grid-cols-3 gap-4">
                        <div class="bg-neutral-950/50 border border-white/5 rounded-lg p-4 text-center">
                            <div class="text-red-500 font-bold text-sm mb-2">Visual Element 1</div>
                            <p class="text-xs text-neutral-500">Decision Boundary</p>
                        </div>
                        <div class="bg-neutral-950/50 border border-white/5 rounded-lg p-4 text-center">
                            <div class="text-red-500 font-bold text-sm mb-2">Visual Element 2</div>
                            <p class="text-xs text-neutral-500">Loss Graph</p>
                        </div>
                        <div class="bg-neutral-950/50 border border-white/5 rounded-lg p-4 text-center">
                            <div class="text-red-500 font-bold text-sm mb-2">Visual Element 3</div>
                            <p class="text-xs text-neutral-500">Prediction Output</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 08. THE FINAL SOLUTION -->
        <section id="solution" class="max-w-6xl mx-auto py-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">08. The Presale Package</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Showing, not telling.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                When visitors landed on the site, they didn't see promises or marketing hype. They saw working software. The landing page featured an embedded neural network visualizer they could interact with immediately, followed by a link to the complete demo course. The presale offer came after they'd already experienced the quality firsthand.
            </p>

            <!-- Main Platform Screenshot Placeholder -->
            <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 mb-12 relative overflow-hidden">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/5 blur-3xl rounded-full"></div>
                <div class="bg-neutral-950 border border-white/5 rounded-xl aspect-video flex items-center justify-center relative z-10">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>
                        </div>
                        <p class="text-neutral-600 text-sm">Course Interface: Real-time Memory Visualizer</p>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-8">
                    <h4 class="text-white font-bold text-lg mb-4">The Landing Page</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed mb-6">
                        Professional design with crisp typography, intentional spacing, and smooth animations signaled credibility. The embedded neural network visualizer let visitors try the interactive platform immediately—no signup required. The value proposition was clear: "See what makes Impart different, right now."
                    </p>
                    <!-- Landing Page Screenshot Placeholder -->
                    <div class="bg-neutral-950 border border-white/5 rounded-lg aspect-video flex items-center justify-center">
                        <div class="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        </div>
                    </div>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-8">
                    <h4 class="text-white font-bold text-lg mb-4">The Demo Course</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed mb-6">
                        Neural Networks from Scratch was completely accessible—not a teaser or limited preview. Visitors could work through the entire module: theory, interactive visualizations, and code implementation. The decision boundary visualizer served as centerpiece, proving the interactive elements weren't vaporware.
                    </p>
                    <!-- Modules Screenshot Placeholder -->
                    <div class="bg-neutral-950 border border-white/5 rounded-lg aspect-video flex items-center justify-center">
                        <div class="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                        </div>
                    </div>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-8">
                    <h4 class="text-white font-bold text-lg mb-4">The Presale Offer</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed mb-6">
                        Introduction to Programming—the actual presale product—showed its roadmap with module counts and lesson outlines but remained locked. Transparent about timeline and delivery. Presale pricing justified by early access and founding member status. The ask: fund the development of more courses using the proven methodology.
                    </p>
                    <!-- Pricing Screenshot Placeholder -->
                    <div class="bg-neutral-950 border border-white/5 rounded-lg aspect-video flex items-center justify-center">
                        <div class="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 09. IMPACT & RETROSPECTIVE -->
        <section id="impact" class="max-w-6xl mx-auto py-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">09. Impact & Retrospective</h3>
            <h2 class="text-4xl font-medium text-white mb-8">The demo-first strategy worked.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The presale launch validated the core hypothesis: when you prove quality upfront, people will pay for more. Building the demo course first wasn't just about reducing risk—it fundamentally changed the nature of the presale from "trust me" to "you've already seen it."
            </p>

            <!-- Metrics -->
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-3xl rounded-full"></div>
                    <div class="relative z-10">
                        <h4 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-4 font-bold">Presale Success</h4>
                        <div class="text-5xl font-bold text-white mb-4">140<span class="text-green-500">%</span></div>
                        <p class="text-sm text-neutral-400">Exceeded our initial funding goal within the first 72 hours, with strong conversion rates from landing page visitors.</p>
                    </div>
                </div>

                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
                    <div class="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 blur-3xl rounded-full"></div>
                    <div class="relative z-10">
                        <h4 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-4 font-bold">Qualitative Validation</h4>
                        <p class="text-lg text-white font-medium italic mb-4">"I've never understood training algorithms until now. Seeing the decision boundary move as I adjusted weights made it click instantly."</p>
                        <p class="text-sm text-neutral-400">Recurring theme from demo course users.</p>
                    </div>
                </div>
            </div>

            <!-- What Worked -->
            <div class="mb-16">
                <h3 class="text-2xl font-medium text-white mb-8">What Made the Presale Work</h3>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                        <h4 class="text-white font-bold mb-3">Showing, Not Telling</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">The interactive demo on the landing page was the breakthrough. People didn't have to trust promises—they could try the visualizer immediately and experience the teaching quality firsthand.</p>
                    </div>
                    <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                        <h4 class="text-white font-bold mb-3">The Demo Topic Choice</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">Neural networks were impressive and showcased the methodology perfectly. Complex enough to wow people, but self-contained enough to ship as a standalone module.</p>
                    </div>
                    <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                        <h4 class="text-white font-bold mb-3">Production Quality</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">Professional design, smooth 60fps animations, and thoughtful typography built trust. The polish signaled this wasn't another abandoned side project.</p>
                    </div>
                    <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                        <h4 class="text-white font-bold mb-3">Transparency</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">Clear about what was ready (neural networks demo) vs. what was planned (intro to coding). Honest about timeline and delivery. No bait-and-switch.</p>
                    </div>
                </div>
            </div>

            <!-- Community Reception -->
            <h3 class="text-2xl font-medium text-white mb-8">Voice of the Learner</h3>
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                {#each testimonials as t}
                    <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 relative">
                         <div class="text-4xl absolute top-4 right-8 text-neutral-800 font-serif">"</div>
                        <p class="text-neutral-300 text-lg leading-relaxed mb-8 italic">
                            {t.quote}
                        </p>
                        <div class="flex items-center gap-4">
                            <div class={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs bg-gradient-to-br ${t.color}`}>
                                {t.initials}
                            </div>
                            <div>
                                <div class="text-white font-bold text-sm">{t.name}</div>
                                <div class="text-neutral-500 text-xs">{t.role}</div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>

            <!-- What I Learned -->
            <div class="bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-500/20 rounded-3xl p-12 relative overflow-hidden">
                <div class="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-6 font-bold relative z-10">Founder's Note</h3>
                <p class="text-neutral-300 text-lg leading-relaxed max-w-3xl relative z-10 mb-6">
                    I spent 2+ months building a demo course with no guarantee anyone would pay for it. That risk felt enormous at the time. But proving quality upfront was the only way to build trust as an unknown creator. In a world of abandoned Kickstarters and broken promises, showing working software first became the differentiator.
                </p>
                <p class="text-neutral-300 text-lg leading-relaxed max-w-3xl relative z-10 mb-6">
                    Most course presales rely on marketing copy and mockups. I took the opposite approach: build something real, then ask people to fund more of it. The demo course took months, but it proved the concept in a way no landing page ever could. The presale wasn't selling a dream—it was selling access to more of what people had already experienced.
                </p>
                <p class="text-white text-xl font-medium relative z-10 italic">
                    The lesson: In education, clarity is the product. If you can prove you deliver clarity better than anyone else, people will pay premium prices for it.
                </p>
            </div>
        </section>
    </div>
</OnMount>

<style>
    .gradient-bg {
        pointer-events: none;
        background: radial-gradient(ellipse at top, rgba(239, 68, 68, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
    }

    section {
        scroll-margin-top: 5rem;
    }

    h1, h2 {
        letter-spacing: -0.03em;
    }

    @keyframes wave {
        0%, 100% { transform: scaleY(1); opacity: 0.3; }
        50% { transform: scaleY(1.5); opacity: 0.6; }
    }
</style>