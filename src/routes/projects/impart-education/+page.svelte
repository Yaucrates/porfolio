<script lang="ts">
    import { navState } from "$lib/components/navigation/nav-state.svelte";
    import OnMount from "$lib/components/OnMount.svelte";
    import Showcase from "$lib/components/Showcase.svelte";
    import { fly } from "svelte/transition";

    // Re-adding Impart specific data for authenticity
    const plannedModules = [
        {
            label: "Units 1-3",
            title: "The Foundations",
            desc: "Master the building blocks of Python: Function, Variables, Conditionals, and Loops.",
            status: "Free Preview",
            active: true
        },
        {
            label: "Units 4-6",
            title: "Algorithms & Data",
            desc: "Write efficient code. Learn Data Structures, Mutability, and Object Oriented Programming.",
            status: "In Development",
            active: false
        },
        {
            label: "Units 7-10",
            title: "Engineering",
            desc: "Build real-world applications. Master Libraries, APIs, Async programming, and File I/O.",
            status: "In Development",
            active: false
        }
    ];

    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "UX Designer",
            initials: "SJ",
            quote: "The interactive demos were the first time I actually understood how a neural network works. Instant pre-order.",
            color: "from-purple-500 to-indigo-500"
        },
        {
            name: "Marcus Chen",
            role: "CS Undergrad",
            initials: "MC",
            quote: "My university professors still teach on whiteboards. This feels like what CS education should look like in 2025.",
            color: "from-blue-500 to-cyan-500"
        }
    ];

    navState.sections = [
        { id: "overview", label: "Overview" },
        { id: "challenge", label: "The Challenge" },
        { id: "solution", label: "The Solution" },
        { id: "execution", label: "Execution" },
        { id: "impact", label: "Impact" }
    ];
</script>

<OnMount>
    <div in:fly={{ y: 200, duration: 1300 }} class="text-[#e5e5e5] min-h-screen pt-44 pb-24">
        <div class="w-full min-h-screen absolute top-0 gradient-bg"></div>
        
        <!-- Hero Section -->
        <section id="overview" class="max-w-6xl mx-auto px-6">
            <header class="text-center mb-16">
                <h1 class="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4 italic">Impart Education</h1>
                <p class="text-neutral-500 text-lg uppercase tracking-widest font-light">Computer Science, Decoded — 2025</p>
            </header>
        </section>

        <!-- Main Showcase -->
        <section id="showcase" class="max-w-7xl mx-auto pb-24 px-16 md:px-20 relative">
            <Showcase showBrowserChrome>
                {#snippet children()}
                    <!-- Impart Landing Page Mock -->
                    <div class="w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden p-8">
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
        </section>

        <!-- Project Details -->
        <section class="max-w-6xl mx-auto px-6 pb-24">
            <div class="grid md:grid-cols-2 gap-12 border-b border-neutral-900 pb-16">
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-6 font-bold">Project Goal</h3>
                    <p class="text-sm leading-relaxed mb-8">
                        <span class="text-white font-bold">Replace passive learning</span> with active intuition. Impart Education is designed for students who find traditional 2-hour video lectures ineffective.
                    </p>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-6 font-bold">Tech Stack</h3>
                    <p class="text-xs text-neutral-400 leading-relaxed">
                        SvelteKit, Tailwind CSS, GSAP for animations, Canvas API for interactive technical demos.
                    </p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-6 font-bold">Philosophy</h3>
                    <p class="text-sm leading-relaxed text-neutral-300">
                        "University moves too slow. Bootcamps skip the fundamentals." Impart targets the sweet spot: deep computer science theory taught with the visual clarity of a high-end production.
                    </p>
                </div>
            </div>
        </section>

        <!-- Challenge Section -->
        <section id="challenge" class="max-w-6xl mx-auto py-24 px-6">
            <div class="bg-neutral-900 border border-neutral-800 rounded-3xl p-12 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-3xl rounded-full"></div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-8 font-bold">The Challenge</h3>
                <h2 class="text-3xl font-medium text-white mb-8 max-w-xl">Dry delivery and "weeder" courses make CS inaccessible.</h2>
                <div class="grid md:grid-cols-2 gap-8 relative z-10">
                    <p class="text-neutral-400 text-sm leading-relaxed">
                        Computer Science is often gate-kept by overly academic language and dry, static materials. The challenge was to take complex topics like Neural Networks and Memory Management and make them feel tactile and intuitive through interaction.
                    </p>
                    <div class="flex flex-col gap-3">
                        <div class="bg-neutral-950 p-4 rounded-lg border border-white/5 flex items-center gap-4">
                            <span class="text-red-500">✕</span>
                            <div class="text-[11px] uppercase tracking-wider font-bold text-neutral-400">2-Hour Lecture Fatigue</div>
                        </div>
                        <div class="bg-neutral-950 p-4 rounded-lg border border-white/5 flex items-center gap-4">
                            <span class="text-red-500">✕</span>
                            <div class="text-[11px] uppercase tracking-wider font-bold text-neutral-400">Static, Non-Interactive Code</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Solution Section -->
        <section id="solution" class="max-w-6xl mx-auto py-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-8 font-bold">The Solution</h3>
            <h2 class="text-4xl font-medium text-white mb-12">The Impart Standard</h2>

            <div class="grid md:grid-cols-3 gap-6">
                {#each plannedModules as module}
                    <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-colors group">
                        <div class="text-[10px] font-mono text-neutral-500 mb-4 uppercase tracking-widest">{module.label}</div>
                        <h4 class="text-lg font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{module.title}</h4>
                        <p class="text-xs text-neutral-400 leading-relaxed">
                            {module.desc}
                        </p>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Impact Section -->
        <section id="impact" class="max-w-6xl mx-auto py-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-8 font-bold">Social Proof</h3>
            <h2 class="text-4xl font-medium text-white mb-12 text-center">Community Reception</h2>

            <div class="grid md:grid-cols-2 gap-8">
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