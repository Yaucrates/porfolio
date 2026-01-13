<script lang="ts">
    import DemoMLP from "$lib/components/case-studies/impart-education/DemoMLP.svelte";
    import { navState } from "$lib/components/navigation/nav-state.svelte";
    import OnMount from "$lib/components/OnMount.svelte";
    import Showcase from "$lib/components/Showcase.svelte";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    onMount(() => {
        navState.sections = [
            { id: "overview", label: "Overview" },
            { id: "highlights", label: "Highlights" },
            { id: "context", label: "Context" },
            { id: "problem", label: "The Problem" },
            { id: "objective", label: "The Objective" },
            { id: "principles", label: "Principles" },
            { id: "vizulaizer", label: "The Vizualizer" },
            { id: "checkout-flow", label: "Checkout Flow" },
            { id: "impact", label: "Current Status" }
        ];
    });
</script>

<svelte:head>
	<title>Impart Education | Case Study</title>
	<meta name="description" content="This is a case study breaking down Impart Education, a side project that I've been working on." />
</svelte:head>

<OnMount>
    <div class="w-full min-h-screen absolute top-0 gradient-bg"></div>
    <div in:fly={{ y: 200, duration: 1300 }} class="text-[#e5e5e5] min-h-screen pt-44 pb-24">
        
        <!-- Hero Section -->
        <section id="overview" class="max-w-6xl mx-auto px-6">
            <header class="text-center mb-16">
                <h1 class="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4 italic">Impart Education</h1>
                <p class="text-neutral-500 text-lg uppercase tracking-widest font-light">A UI/UX Case Study</p>
                <p class="text-neutral-600 text-sm mt-4 font-medium">Independent Developer — May 2025 to Present</p>
            </header>

            <!-- Main Showcase -->
            <div class="w-full p-0 md:p-6">
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
                                    <span class="text-orange-300 text-[10px] font-bold uppercase tracking-wider">Presale Coming Soon</span>
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
                                    Notify Me ($24 Early Bird)
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
                            <span class="text-[9px] text-red-500 font-bold uppercase">Work in Progress</span>
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
                            Join Waitlist
                        </button>
                    {/snippet}
                </Showcase>
            </div>

            <!-- Project Meta -->
            <div class="max-w-4xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-900 pt-12">
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Scope</h3>
                    <p class="text-sm text-neutral-400">UI/UX Design & Full-stack Development</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Timeline</h3>
                    <p class="text-sm text-neutral-400">Ongoing (Worked on in spare time)</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Stack</h3>
                    <p class="text-sm text-neutral-400">Node.js, SvelteKit, Tailwind CSS, PostgreSQL, TypeScript, Figma, Stripe</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Links</h3>
                    <div class="flex flex-col gap-2">
                        <a 
                            href="https://www.imparteducation.com/"
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
                        >
                            Live Site 
                            <svg class="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Overview Text -->
            <div class="max-w-4xl mx-auto space-y-6 mt-16 text-neutral-300 leading-relaxed">
                <p class="text-lg">
                    This case study explores the UI/UX design journey of Impart Education, an educational platform
                    built in my spare time. The challenge was designing a complete checkout experience that could
                    <span class="text-white font-bold">convert visitors into paying customers for a course that didn't exist yet.</span>
                </p>

                <p class="text-lg">
                    The design had to accomplish two things: demonstrate the quality of the eventual product through
                    a polished demo course, and guide users through a checkout flow that built trust despite being
                    from an unknown creator. Every design decision—from the landing page to the payment confirmation—was
                    crafted to reduce friction and establish credibility.
                </p>

                <p class="text-lg">
                    The project combined three design challenges: an interactive learning platform using PixiJS
                    and GPU-accelerated graphics, a landing page that communicated value, and a checkout flow
                    with trust signals, social proof, and clear value emphasis.
                </p>
            </div>
        </section>

        <!-- 01. HIGHLIGHTS -->
        <section id="highlights" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">01. Highlights</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Design pillars of the project.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The design challenge centered on three interconnected areas: a demo course that proved the teaching methodology,
                an interactive platform showcasing technical innovation, and a checkout flow designed to build trust
                with potential customers.
            </p>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">The Demo Course</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">Neural Networks from Scratch served as a design proof of concept. Interactive demos let students manually adjust weights and biases, demonstrating the visual-first learning philosophy that would define the platform's UX.</p>
                </div>

                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">The Interactive Platform</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">Built on PixiJS with GPU acceleration and a custom graphing library. The visualizer design prioritized performance and responsiveness to ensure smooth interactions across devices.</p>
                </div>

                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">The Checkout Experience</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">Typography, spacing, and trust signals were carefully crafted for the checkout flow. The design needed to establish credibility for an unknown creator asking for payment upfront on an unfinished product.</p>
                </div>
            </div>
        </section>

        <!-- 02. CONTEXT -->
        <section id="context" class="max-w-6xl mx-auto px-6 py-24">
            <div class="bg-neutral-900 border border-neutral-800 rounded-3xl p-12 relative overflow-hidden">
                <div class="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 blur-3xl rounded-full"></div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">02. Context</h3>
                <h2 class="text-3xl font-medium text-white mb-8">Research that informed the design decisions.</h2>

                <p class="text-neutral-400 leading-relaxed mb-6 max-w-3xl relative z-10">
                    I was solving my own problem. I always preferred online courses over traditional college education, spending countless hours on MOOCs and platforms like Udemy. But I kept hitting the same wall: courses that were dated, clunky, and frustrating to use. This experience shaped my approach to the platform's UX—every design decision was made to address these pain points.
                </p>

                <p class="text-neutral-400 leading-relaxed mb-12 max-w-3xl relative z-10">
                    Before designing anything, I spent weeks in online communities researching what actually frustrated learners. The insights directly informed the checkout flow: people were willing to pay for quality education, but they needed to see real value before committing. This led to the decision to build a complete demo course first, letting users experience the product before being asked to purchase.
                </p>

                <div class="mt-12 p-8 bg-red-500/5 border border-red-500/20 rounded-xl relative z-10">
                    <h4 class="text-red-500 font-bold mb-3 text-sm uppercase tracking-wider">The Design Approach</h4>
                    <p class="text-neutral-300 leading-relaxed">
                        The checkout experience was designed around a simple principle: let the product prove its own worth. Rather than relying on marketing copy, the demo course would demonstrate quality, and the checkout flow would reinforce trust through clear pricing, social proof, and secure payment indicators.
                    </p>
                </div>
            </div>
        </section>

        <!-- 03. THE PROBLEM -->
        <section id="problem" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">03. The Problem</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Design challenges for checkout credibility.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                Designing a checkout flow for an unknown creator selling an unfinished product required solving several UX challenges:
                establishing visual credibility, balancing information density, and handling different user authentication states.
            </p>

            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <h4 class="text-white font-bold text-sm">Visual Trust Signals</h4>
                    </div>
                    <p class="text-sm text-neutral-400 leading-relaxed">
                        In an era of AI-generated content and scams, the checkout needed clear trust indicators: secure payment badges, money-back guarantees, and testimonials from beta testers.
                    </p>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <h4 class="text-white font-bold text-sm">Information Balance</h4>
                    </div>
                    <p class="text-sm text-neutral-400 leading-relaxed">
                        The checkout needed enough information to justify the purchase without overwhelming users. Visual hierarchy guided attention to value proposition, then pricing, then action.
                    </p>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <h4 class="text-white font-bold text-sm">Authentication Flow</h4>
                        </div>
                    <p class="text-sm text-neutral-400 leading-relaxed">
                        Unauthenticated users needed a seamless path: checkout first, then account creation. This reduced friction while ensuring purchasers could access their course.
                    </p>
                </div>
            </div>
        </section>

        <!-- 04. THE OBJECTIVE -->
        <section id="objective" class="max-w-6xl mx-auto py-24 px-6">
            <div class="bg-neutral-900 border border-neutral-800 rounded-3xl p-12 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-3xl rounded-full"></div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">04. The Objective</h3>
                <h2 class="text-3xl font-medium text-white mb-12 max-w-2xl leading-tight">
                    Design a checkout experience that builds trust and clearly communicates value for an unfinished product.
                </h2>
            </div>
        </section>

        <!-- 05. NORTH STAR PRINCIPLES -->
        <section id="principles" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">05. Principles</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Non-negotiables for the platform.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                As I build out the curriculum in my spare time, these principles guide every decision I make regarding the interactive experience.
            </p>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-red-500/20 mb-4">01</div>
                        <h4 class="text-white font-bold text-xl mb-4">Interactive Textbook</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            A focus on high-fidelity written content and embedded interactive tools. Videos may come later, but the core must be hands-on.
                        </p>
                    </div>
                </div>

                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-red-500/20 mb-4">02</div>
                        <h4 class="text-white font-bold text-xl mb-4">Visual Questioning</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            Interactive demos should raise natural questions. Students should "see" a problem visually before the text explains the theory.
                        </p>
                    </div>
                </div>

                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-red-500/20 mb-4">03</div>
                        <h4 class="text-white font-bold text-xl mb-4">Credibility via Design</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            Polish isn't just aesthetic; it signals commitment. High production value ensures learners take the curriculum as seriously as I do.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 06. THE VISUALIZER -->
        <section id="vizulaizer" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">06. The Vizualizer</h3>
            <div class="bg-neutral-900 border border-neutral-800 rounded-[2.5rem] overflow-hidden relative">
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
                                    <h5 class="text-white font-bold text-lg mb-3">Side Project Constraints</h5>
                                    <p class="text-neutral-400 leading-relaxed text-sm">
                                        I chose PixiJS because it allows me to build complex visualizations without fighting heavy frameworks. Since this is a part-time project, I need tools that are performant and easy to maintain over long stretches.
                                    </p>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div class="bg-neutral-800/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
                                        <div class="text-red-500 mb-3">
                                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                        </div>
                                        <h6 class="text-white font-bold text-xs mb-2 uppercase tracking-wide">Svelte Reactive Layer</h6>
                                        <p class="text-[11px] text-neutral-500 leading-relaxed">Svelte's state management handles the bridge between UI sliders and the WebGL renderer.</p>
                                    </div>
                                    <div class="bg-neutral-800/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
                                        <div class="text-red-500 mb-3">
                                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                                        </div>
                                        <h6 class="text-white font-bold text-xs mb-2 uppercase tracking-wide">Custom Matrix Math</h6>
                                        <p class="text-[11px] text-neutral-500 leading-relaxed">Implemented forward/backward propagation and gradient descent to create the demo.</p>
                                    </div>
                                </div>

                                <div class="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl relative overflow-hidden group">
                                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <svg class="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                                    </div>
                                    <h6 class="text-red-500 font-bold text-sm mb-2 uppercase tracking-wider">The Performance Challenge</h6>
                                    <p class="text-xs text-neutral-400 leading-relaxed relative z-10">
                                        Rendering neurons all of their connections while running real-time predictions was the biggest technical hurdle. With GPU acceleration and caching, we maintained smooth performance even on modest hardware.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- 07. THE CHECKOUT FLOW -->
        <section id="checkout-flow" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">07. The Checkout Flow</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Designing the purchase journey.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The checkout experience was designed to handle two distinct user flows while maintaining trust and reducing friction
                at every step. Each design decision was informed by the unique challenge of selling an unfinished product.
            </p>

            <!-- User Flows -->
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                    <h4 class="text-white font-bold mb-4 flex items-center gap-2">
                        <svg class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        Authenticated Users
                    </h4>
                    <div class="flex items-center gap-2 text-sm text-neutral-400 flex-wrap">
                        <span class="px-3 py-1 bg-neutral-800 rounded-full">Landing Page</span>
                        <span class="text-red-500">→</span>
                        <span class="px-3 py-1 bg-neutral-800 rounded-full">Course Page</span>
                        <span class="text-red-500">→</span>
                        <span class="px-3 py-1 bg-neutral-800 rounded-full">Checkout</span>
                        <span class="text-red-500">→</span>
                        <span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">Success</span>
                    </div>
                    <p class="text-sm text-neutral-500 mt-4">Streamlined 4-step flow for returning users with existing accounts.</p>
                </div>

                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                    <h4 class="text-white font-bold mb-4 flex items-center gap-2">
                        <svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                        New Users
                    </h4>
                    <div class="flex items-center gap-2 text-sm text-neutral-400 flex-wrap">
                        <span class="px-3 py-1 bg-neutral-800 rounded-full">Landing</span>
                        <span class="text-red-500">→</span>
                        <span class="px-3 py-1 bg-neutral-800 rounded-full">Course</span>
                        <span class="text-red-500">→</span>
                        <span class="px-3 py-1 bg-neutral-800 rounded-full">Checkout</span>
                        <span class="text-red-500">→</span>
                        <span class="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full">Email Login</span>
                        <span class="text-red-500">→</span>
                        <span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">Success</span>
                    </div>
                    <p class="text-sm text-neutral-500 mt-4">Purchase-first flow: complete checkout, then create account to access course.</p>
                </div>
            </div>

            <!-- Design Decisions -->
            <h3 class="text-2xl font-medium text-white mb-8">Key design decisions</h3>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <h4 class="text-white font-bold text-sm mb-2">Trust Signals</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">
                        Secure payment badges, "Powered by Stripe" indicator, and money-back guarantee positioned prominently near the payment button.
                    </p>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <h4 class="text-white font-bold text-sm mb-2">Value Emphasis</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">
                        Presale pricing displayed with strikethrough regular price. Visual hierarchy draws eye to discount percentage before the actual price.
                    </p>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/></svg>
                    </div>
                    <h4 class="text-white font-bold text-sm mb-2">Social Proof</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">
                        Testimonials from beta testers placed strategically to validate the learning methodology before users reach the payment step.
                    </p>
                </div>
            </div>
        </section>

        <!-- 08. CURRENT STATUS -->
        <section id="impact" class="max-w-6xl mx-auto pt-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-red-500 mb-4 font-bold">08. Current Status</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Project archived.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The design work for this project is complete. The full checkout flow, landing page, course platform,
                and interactive visualizer were all built and deployed. The project now serves as a showcase of the
                UI/UX design process for an educational presale experience.
            </p>

            <!-- Metrics -->
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-3xl rounded-full"></div>
                    <div class="relative z-10">
                        <h4 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-4 font-bold">Project State</h4>
                        <div class="text-5xl font-bold text-white mb-4">Archived<span class="text-red-500">_</span></div>
                        <p class="text-sm text-neutral-400">The demo course, checkout flow, and platform design are complete. The project is now on hold.</p>
                    </div>
                </div>

                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
                    <div class="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 blur-3xl rounded-full"></div>
                    <div class="relative z-10">
                        <h4 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-4 font-bold">Learner Feedback</h4>
                        <p class="text-lg text-white font-medium italic mb-4">"The visual approach to weights and biases actually makes sense. I can't wait for the full course."</p>
                        <p class="text-sm text-neutral-400">Feedback from early beta testers validated the learning platform design.</p>
                    </div>
                </div>
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