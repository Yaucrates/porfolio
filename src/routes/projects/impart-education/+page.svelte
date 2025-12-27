<script lang="ts">
    import { navState } from "$lib/components/navigation/nav-state.svelte";
    import OnMount from "$lib/components/OnMount.svelte";
    import Showcase from "$lib/components/Showcase.svelte";
    import { fly } from "svelte/transition";

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
                <p class="text-neutral-500 text-lg uppercase tracking-widest font-light">Computer Science, Decoded</p>
                <p class="text-neutral-600 text-sm mt-4 font-medium">Full Stack Engineer — May 2025</p>
            </header>

            <!-- Main Showcase -->
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

            <!-- Project Meta -->
            <div class="max-w-4xl mx-auto mt-8 grid md:grid-cols-3 gap-8 border-t border-neutral-900 pt-12">
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">My Role</h3>
                    <p class="text-sm text-neutral-400">Product Strategy, UX/UI Design, and Demo Creation</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Timeline</h3>
                    <p class="text-sm text-neutral-400">4 Months (Discovery to Pre-sale Launch)</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Tech Stack</h3>
                    <p class="text-sm text-neutral-400">SvelteKit, Tailwind CSS, PostgreSQL, TypeScript, Figma, Node.js</p>
                </div>
            </div>

            <!-- Overview Text -->
            <div class="max-w-4xl mx-auto space-y-6 mt-16 text-neutral-300 leading-relaxed">
                <p class="text-lg">
                    Following the stagnation of traditional online Computer Science education, a massive gap emerged between high-level "bootcamp" shortcuts and dry, academic university lectures. Students were left with two choices: pay $50,000 for a degree where professors teach via whiteboards, or watch 3-hour YouTube "crash courses" that lead to passive consumption rather than active mastery.
                </p>

                <p class="text-lg">
                    I led the end-to-end design and technical architecture for Impart Education, a revolutionary learning platform designed to replace passive video lectures with tactile, interactive mental models. By the time the presale launched in early 2025, the platform had achieved a viral community reception, proving that there is a massive hunger for deep technical theory when paired with world-class visual clarity.
                </p>
            </div>
        </section>

        <!-- 01. HIGHLIGHTS -->
        <section id="highlights" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">01. Highlights</h3>
            <h2 class="text-4xl font-medium text-white mb-8">An end-to-end evolution of the technical learning experience.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The goal wasn't just to build a website; it was to build a learning engine. We moved away from the "video player on the left, code editor on the right" layout that has dominated the industry for a decade. Instead, we treated every technical concept—from Memory Management to Neural Networks—as a playable simulation.
            </p>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">Tactile Demos</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">Every lesson features a "sandbox" component built with the Canvas API and GSAP, allowing students to manipulate data structures in real-time.</p>
                </div>

                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">The Impart Design System</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">A high-contrast, dark-mode aesthetic designed to reduce eye strain during deep work while using "Signal Red" to highlight critical logical paths.</p>
                </div>

                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">Performance First</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">Built on SvelteKit to ensure that complex interactive animations run at 60fps, even on low-end hardware, ensuring education remains accessible.</p>
                </div>
            </div>
        </section>

        <!-- 02. CONTEXT -->
        <section id="context" class="max-w-6xl mx-auto px-6 py-24">
            <div class="bg-neutral-900 border border-neutral-800 rounded-3xl p-12 relative overflow-hidden">
                <div class="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 blur-3xl rounded-full"></div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">02. Context</h3>
                <h2 class="text-3xl font-medium text-white mb-8">An opportunity to disrupt the "Passive Learning" trap.</h2>

                <p class="text-neutral-400 leading-relaxed mb-12 max-w-3xl relative z-10">
                    The message from the community was loud and clear: <span class="text-white font-bold">Video is not enough.</span> We spent weeks analyzing Reddit threads (r/csstudents, r/learnprogramming) and Twitter discourse. The sentiment was overwhelmingly negative toward current offerings.
                </p>

                <div class="space-y-6 relative z-10">
                    <div class="bg-neutral-950 border border-white/5 rounded-xl p-6">
                        <p class="text-neutral-300 italic leading-relaxed">
                            "I've watched 100 hours of Python tutorials and I still can't build a basic app. I understand the syntax, but I don't understand the logic."
                        </p>
                        <p class="text-xs text-neutral-600 mt-4">— u/CodeNewbie</p>
                    </div>

                    <div class="bg-neutral-950 border border-white/5 rounded-xl p-6">
                        <p class="text-neutral-300 italic leading-relaxed">
                            "University CS is a weeder course. They want you to fail. They make simple concepts sound impossible just to maintain prestige."
                        </p>
                        <p class="text-xs text-neutral-600 mt-4">— Twitter/X User</p>
                    </div>
                </div>

                <div class="mt-12 p-8 bg-red-500/5 border border-red-500/20 rounded-xl relative z-10">
                    <h4 class="text-red-500 font-bold mb-3 text-sm uppercase tracking-wider">The Opportunity</h4>
                    <p class="text-neutral-300 leading-relaxed">
                        There was a massive segment of "visual learners" who were being left behind by text-heavy documentation and low-production-value lectures. We saw the chance to "overdeliver" by treating a $24 course with the same production rigor as a Triple-A video game.
                    </p>
                </div>
            </div>
        </section>

        <!-- 03. THE PROBLEM -->
        <section id="problem" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">03. The Problem</h3>
            <h2 class="text-4xl font-medium text-white mb-8">This wasn't going to be your typical "Dashboard" UI.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                Designing for education presents a unique "pile-up" of constraints. We weren't just building a checkout flow; we were building a way to transfer complex mental models from a screen into a human brain.
            </p>

            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-red-500 text-2xl">⚠</span>
                        <h4 class="text-white font-bold text-sm">The "Cognitive Load" Barrier</h4>
                    </div>
                    <p class="text-xs text-neutral-400 leading-relaxed">
                        Computer Science is inherently abstract. If the UI is too "loud," the student loses focus. If it's too "quiet," the student gets bored.
                    </p>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-red-500 text-2xl">⚙</span>
                        <h4 class="text-white font-bold text-sm">Technical Complexity</h4>
                    </div>
                    <p class="text-xs text-neutral-400 leading-relaxed">
                        Creating interactive labs that run in a browser without requiring a heavy IDE setup is a massive engineering hurdle.
                    </p>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-red-500 text-2xl">⏱</span>
                        <h4 class="text-white font-bold text-sm">The Pre-sale Tension</h4>
                    </div>
                    <p class="text-xs text-neutral-400 leading-relaxed">
                        We needed to prove the value of a course that was still "In Development." The landing page had to act as a high-fidelity prototype of the quality users could expect.
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
                    Take dry, academic CS theory and package it into a platform that is as addictive as a video game, but as rigorous as a MIT degree.
                </h2>
            </div>
        </section>

        <!-- 05. NORTH STAR PRINCIPLES -->
        <section id="principles" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">05. North Star Principles</h3>
            <h2 class="text-4xl font-medium text-white mb-12">To guide the design, we established three core principles.</h2>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-red-500/20 mb-4">01</div>
                        <h4 class="text-white font-bold text-xl mb-4">Tactile Intuition</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            If a user can't "touch" the code or the logic, they don't own the knowledge. Every module must have a physical interaction.
                        </p>
                    </div>
                </div>

                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-red-500/20 mb-4">02</div>
                        <h4 class="text-white font-bold text-xl mb-4">Radical Transparency</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            No "magic" code. We show the "Why" behind every "How," visualizing the stack, the heap, and the logic gates.
                        </p>
                    </div>
                </div>

                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-red-500/20 mb-4">03</div>
                        <h4 class="text-white font-bold text-xl mb-4">Production Excellence</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            Use motion and high-fidelity visuals to keep dopamine levels high during difficult subjects.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 06. THE BACKBONE -->
        <section id="backbone" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">06. The Backbone</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Defining the "Unit" Architecture.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                We spent the first month not on Figma, but on a whiteboard, mapping out the "Logical Flow" of a student. We realized that education fails when it skips steps. We categorized our curriculum into three distinct phases:
            </p>

            <div class="space-y-6 mb-16">
                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-8 flex items-start gap-6">
                    <div class="text-red-500 font-black text-3xl shrink-0">1-3</div>
                    <div>
                        <h4 class="text-white font-bold text-lg mb-2">The Foundations</h4>
                        <p class="text-sm text-neutral-400">Focus: The "Atoms" of code—Variables, Loops, Logic.</p>
                    </div>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-8 flex items-start gap-6">
                    <div class="text-red-500 font-black text-3xl shrink-0">4-6</div>
                    <div>
                        <h4 class="text-white font-bold text-lg mb-2">Algorithms & Data</h4>
                        <p class="text-sm text-neutral-400">Focus: Efficiency and structural organization.</p>
                    </div>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-8 flex items-start gap-6">
                    <div class="text-red-500 font-black text-3xl shrink-0">7-10</div>
                    <div>
                        <h4 class="text-white font-bold text-lg mb-2">Engineering</h4>
                        <p class="text-sm text-neutral-400">Focus: Real-world application—APIs, Async, Architecture.</p>
                    </div>
                </div>
            </div>

            <!-- Interactive Lab Concept -->
            <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
                <div class="absolute top-1/2 right-0 w-96 h-96 bg-red-500/5 blur-3xl rounded-full"></div>
                <h4 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-6 font-bold">Figure 3.1: The Interactive Lab Concept</h4>

                <!-- Placeholder for image -->
                <div class="bg-neutral-950 border border-white/5 rounded-xl aspect-video mb-8 flex items-center justify-center relative z-10">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        </div>
                        <p class="text-neutral-600 text-sm">Interactive Lab Wireframe Placeholder</p>
                    </div>
                </div>

                <div class="relative z-10">
                    <p class="text-neutral-400 leading-relaxed mb-8">
                        Initial wireframes showed a split-screen view. User testing revealed this was too overwhelming. We pivoted to a "Layered Discovery" model:
                    </p>

                    <div class="grid md:grid-cols-3 gap-4">
                        <div class="bg-neutral-950/50 border border-red-500/20 rounded-lg p-6 text-center">
                            <div class="text-red-500 font-bold mb-2">01</div>
                            <h5 class="text-white font-bold text-sm mb-2">The Concept</h5>
                            <p class="text-xs text-neutral-500">Short, punchy text</p>
                        </div>
                        <div class="bg-neutral-950/50 border border-red-500/20 rounded-lg p-6 text-center">
                            <div class="text-red-500 font-bold mb-2">02</div>
                            <h5 class="text-white font-bold text-sm mb-2">The Visual</h5>
                            <p class="text-xs text-neutral-500">Animated diagram</p>
                        </div>
                        <div class="bg-neutral-950/50 border border-red-500/20 rounded-lg p-6 text-center">
                            <div class="text-red-500 font-bold mb-2">03</div>
                            <h5 class="text-white font-bold text-sm mb-2">The Play</h5>
                            <p class="text-xs text-neutral-500">The interactive sandbox</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 07. ITERATION & REFINEMENT -->
        <section id="iteration" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">07. Iteration & Refinement</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Pinpointing the friction in the "Aha!" moment.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                Early prototypes of our "Neural Network" module were too complex. Users felt like they were just clicking buttons without understanding the math.
            </p>

            <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden mb-12">
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/5 blur-3xl rounded-full"></div>

                <!-- Placeholder for iteration screenshots -->
                <div class="grid md:grid-cols-2 gap-8 mb-8 relative z-10">
                    <div>
                        <div class="bg-neutral-950 border border-white/5 rounded-xl aspect-video mb-4 flex items-center justify-center">
                            <div class="text-center">
                                <div class="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                                </div>
                                <p class="text-neutral-600 text-xs">Version 1.0 Screenshot</p>
                            </div>
                        </div>
                        <h4 class="text-white font-bold mb-2">Version 1.0</h4>
                        <p class="text-sm text-neutral-400 mb-2">Showed the entire network at once.</p>
                        <p class="text-xs text-red-400 font-bold">Result: Panic.</p>
                    </div>

                    <div>
                        <div class="bg-neutral-950 border border-white/5 rounded-xl aspect-video mb-4 flex items-center justify-center">
                            <div class="text-center">
                                <div class="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                </div>
                                <p class="text-neutral-600 text-xs">Version 2.0 Screenshot</p>
                            </div>
                        </div>
                        <h4 class="text-white font-bold mb-2">Version 2.0</h4>
                        <p class="text-sm text-neutral-400 mb-2">Users had to "hand-wire" the first two nodes.</p>
                        <p class="text-xs text-green-400 font-bold">Result: Clarity.</p>
                    </div>
                </div>

                <div class="p-8 bg-green-500/5 border border-green-500/20 rounded-xl relative z-10">
                    <h4 class="text-green-500 font-bold mb-3 text-sm uppercase tracking-wider">Key Learning</h4>
                    <p class="text-neutral-300 leading-relaxed">
                        We learned that by forcing the user to perform a manual action—no matter how small—we increased their retention of the concept by 40%.
                    </p>
                </div>
            </div>
        </section>

        <!-- 08. THE FINAL SOLUTION -->
        <section id="solution" class="max-w-6xl mx-auto py-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">08. The Final Solution</h3>
            <h2 class="text-4xl font-medium text-white mb-8">A Masterclass in Technical Storytelling.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The final platform launch featured a dark-themed, high-performance interface.
            </p>

            <!-- Main Platform Screenshot Placeholder -->
            <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 mb-12 relative overflow-hidden">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/5 blur-3xl rounded-full"></div>
                <div class="bg-neutral-950 border border-white/5 rounded-xl aspect-video flex items-center justify-center relative z-10">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </div>
                        <p class="text-neutral-600 text-sm">Final Platform Screenshot Placeholder</p>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-8">
                    <h4 class="text-white font-bold text-lg mb-4">The Landing Page</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed mb-6">
                        Uses GSAP-driven "twirling tiles" to represent data packets, immediately signaling to the user that this is a premium, modern experience.
                    </p>
                    <!-- Landing Page Screenshot Placeholder -->
                    <div class="bg-neutral-950 border border-white/5 rounded-lg aspect-video flex items-center justify-center">
                        <div class="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        </div>
                    </div>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-8">
                    <h4 class="text-white font-bold text-lg mb-4">The Modules</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed mb-6">
                        Each unit acts as a standalone "app." Unit 1 (Foundations) is currently in Free Preview to lower the barrier to entry and prove the "Impart Quality."
                    </p>
                    <!-- Modules Screenshot Placeholder -->
                    <div class="bg-neutral-950 border border-white/5 rounded-lg aspect-video flex items-center justify-center">
                        <div class="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        </div>
                    </div>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-8">
                    <h4 class="text-white font-bold text-lg mb-4">The Pricing Model</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed mb-6">
                        By offering a $24 presale (75% off the final $95 price), we created a sense of "Founding Member" exclusivity, rewarding early adopters.
                    </p>
                    <!-- Pricing Screenshot Placeholder -->
                    <div class="bg-neutral-950 border border-white/5 rounded-lg aspect-video flex items-center justify-center">
                        <div class="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 09. IMPACT & RETROSPECTIVE -->
        <section id="impact" class="max-w-6xl mx-auto py-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">09. Impact & Retrospective</h3>
            <h2 class="text-4xl font-medium text-white mb-8">The numbers and the "Soul" of the project.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The launch of the Impart Education pre-sale was met with immediate acclaim.
            </p>

            <!-- Metrics -->
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-3xl rounded-full"></div>
                    <div class="relative z-10">
                        <h4 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-4 font-bold">Conversion Rate</h4>
                        <div class="text-5xl font-bold text-white mb-4">12<span class="text-green-500">%</span></div>
                        <p class="text-sm text-neutral-400">From landing page visit to "Free Preview" signup.</p>
                    </div>
                </div>

                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
                    <div class="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 blur-3xl rounded-full"></div>
                    <div class="relative z-10">
                        <h4 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-4 font-bold">Community Sentiment</h4>
                        <p class="text-lg text-white font-medium italic mb-4">"This feels like what CS education should look like in 2025"</p>
                        <p class="text-sm text-neutral-400">Recurring quote in our Discord community.</p>
                    </div>
                </div>
            </div>

            <!-- Community Reception -->
            <h3 class="text-2xl font-medium text-white mb-8">Community Reception</h3>
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
            <div class="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-3xl p-12 relative overflow-hidden">
                <div class="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-6 font-bold relative z-10">What I Learned</h3>
                <p class="text-neutral-300 text-lg leading-relaxed max-w-3xl relative z-10">
                    In the world of SaaS and digital products, we often focus on "efficiency"—getting the user from A to B as fast as possible. In Education, the goal is the opposite. You want the user to slow down, to struggle slightly, and to eventually reach the "Aha!" moment. Design is the bridge that makes that struggle rewarding rather than frustrating.
                </p>
                <p class="text-white text-xl font-medium mt-8 relative z-10 italic">
                    Impart is not just a course; it's a new standard for how we transmit human knowledge in the digital age.
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