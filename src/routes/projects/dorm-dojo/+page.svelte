<script lang="ts">
    /* Note: You may need to create a specific demo component for Dorm Dojo 
       or keep the placeholder logic below */
    import { navState } from "$lib/components/navigation/nav-state.svelte";
    import OnMount from "$lib/components/OnMount.svelte";
    import Showcase from "$lib/components/Showcase.svelte";
    import { fly } from "svelte/transition";

    navState.sections = [
        { id: "overview", label: "Overview" },
        { id: "highlights", label: "Highlights" },
        { id: "principles", label: "Principles" },
        { id: "impact", label: "Current Status" }
    ];
</script>

<svelte:head>
	<title>Dorm Dojo | Case Study</title>
	<meta name="description" content="A case study on building Dorm Dojo, the ultimate resource for college dorm living and essentials." />
</svelte:head>

<OnMount>
    <div class="w-full min-h-screen absolute top-0 gradient-bg"></div>
    <div in:fly={{ y: 200, duration: 1300 }} class="text-[#e5e5e5] min-h-screen pt-44 pb-24">
        
        <!-- Hero Section -->
        <section id="overview" class="max-w-6xl mx-auto px-6">
            <header class="text-center mb-16">
                <h1 class="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4 italic">Dorm Dojo</h1>
                <p class="text-neutral-500 text-lg uppercase tracking-widest font-light">Elevating the College Experience</p>
                <p class="text-neutral-600 text-sm mt-4 font-medium">Founder & Lead Developer — Freshman Year 2025</p>
            </header>

            <!-- Main Showcase: Accurate Dorm Dojo UI -->
            <div class="w-full p-0 md:p-6">
                <Showcase showBrowserChrome>
                    {#snippet children()}
                        <div class="w-full h-full bg-white flex flex-col relative overflow-hidden font-sans">
                            
                            <!-- Top Nav Mock - Styled to match image -->
                            <nav class="w-full px-4 md:px-8 py-6 flex items-center justify-between bg-white border-b border-neutral-100 z-20">
                                <div class="font-black text-2xl tracking-tighter text-black">DORMDOJO</div>
                                
                                <div class="hidden min-[1000px]:flex gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-black">
                                    <span class="cursor-pointer">Explore <span class="text-[8px] ml-1">▼</span></span>
                                    <span class="cursor-pointer">Amenities <span class="text-[8px] ml-1">▼</span></span>
                                    <span class="cursor-pointer">Dorm Living Crash Course</span>
                                </div>
                                
                                <div class="relative cursor-pointer">
                                    <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                    </svg>
                                    <span class="absolute -top-2 -right-2 bg-[#2563eb] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">1</span>
                                </div>
                            </nav>

                            <!-- Split Hero - Matching the Next.js logic -->
                            <div class="flex-1 flex flex-col min-[1000px]:flex-row gap-1 min-[1000px]:gap-[0.4%] bg-white">

                                <!-- Left: Essentials -->
                                <div class="relative flex-1 min-h-[500px] overflow-hidden group">
                                    <!-- Replace with your actual /left.webp path -->
                                    <img 
                                        src="/projects/dorm-dojo-case-study/left.webp" 
                                        alt="Essentials" 
                                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                    />
                                    <div class="absolute inset-0 bg-black/5"></div> <!-- Subtle overlay for text legibility -->
                                    
                                    <div class="absolute bottom-12 md:bottom-24 left-0 right-0 flex flex-col items-center gap-6 z-10">
                                        <h1 class="text-white text-4xl md:text-5xl font-light tracking-widest uppercase">
                                            Essentials
                                        </h1>
                                        <button class="bg-white w-56 h-12 text-black text-lg font-normal uppercase tracking-wide shadow-sm hover:bg-neutral-100 transition-colors">
                                            Explore
                                        </button>
                                    </div>
                                </div>

                                <!-- Right: Amenities -->
                                <div class="relative flex-1 min-h-[500px] overflow-hidden group">
                                    <!-- Replace with your actual /right.webp path -->
                                    <img 
                                        src="/projects/dorm-dojo-case-study/right.webp" 
                                        alt="Amenities" 
                                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                    />
                                    <div class="absolute inset-0 bg-black/10"></div>
                                    
                                    <div class="absolute bottom-12 md:bottom-24 left-0 right-0 flex flex-col items-center gap-6 z-10">
                                        <h1 class="text-white text-4xl md:text-5xl font-light tracking-widest uppercase">
                                            Amenities
                                        </h1>
                                        <button class="bg-white w-56 h-12 text-black text-lg font-normal uppercase tracking-wide shadow-sm hover:bg-neutral-100 transition-colors">
                                            Explore
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    {/snippet}

                    {#snippet leftCard()}
                        <div class="flex items-center gap-2 mb-4">
                            <div class="p-2 rounded bg-blue-500/10 border border-blue-500/20 text-blue-500">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                            </div>
                            <span class="text-xs font-mono text-neutral-500 uppercase tracking-widest">Cart Summary</span>
                        </div>
                        <p class="text-sm font-bold mb-2 text-white">The Freshmen Set</p>
                        <p class="text-[11px] text-neutral-400 leading-relaxed mb-6">
                            Everything you need for move-in day, curated by students who've been there.
                        </p>
                        <div class="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                            <div class="h-full w-3/4 bg-blue-500"></div>
                        </div>
                        <div class="flex justify-between mt-2">
                            <span class="text-[9px] text-blue-500 font-bold uppercase">Stock Low</span>
                            <span class="text-[9px] text-neutral-600">75% Claimed</span>
                        </div>
                    {/snippet}

                    {#snippet rightCard()}
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <span class="text-blue-500 font-bold tracking-wider text-[10px] uppercase mb-1 block">Student Discount</span>
                                <div class="flex items-baseline gap-2">
                                    <span class="text-3xl font-bold text-white">$149</span>
                                    <span class="text-sm text-neutral-500 line-through">$210</span>
                                </div>
                            </div>
                            <div class="bg-blue-500/10 text-blue-400 text-[9px] font-bold px-2 py-1 rounded border border-blue-500/20">
                                SAVE 30%
                            </div>
                        </div>

                        <ul class="space-y-3 mb-6">
                            {#each ['Free Campus Delivery', 'Move-in Guarantee', 'Easy Returns'] as feat}
                            <li class="flex items-center gap-2 text-[10px] text-neutral-300 font-medium">
                                <svg class="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                                {feat}
                            </li>
                            {/each}
                        </ul>

                        <button class="w-full py-2 bg-neutral-100 hover:bg-white text-black text-xs font-bold rounded transition-colors">
                            Add to Cart
                        </button>
                    {/snippet}
                </Showcase>
            </div>

            <!-- Project Meta -->
            <div class="max-w-4xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-900 pt-12">
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Scope</h3>
                    <p class="text-sm text-neutral-400">E-commerce Platform & Lifestyle Resource</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Timeline</h3>
                    <p class="text-sm text-neutral-400">Freshman Year — 2025</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Stack</h3>
                    <p class="text-sm text-neutral-400">SvelteKit, Tailwind, Shopify, TS</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Links</h3>
                    <div class="flex flex-col gap-2">
                        <a 
                            href="https://dormdojo.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
                        >
                            Live Site 
                            <svg class="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        <a 
                            href="https://github.com/Yaucrates/dormdojo" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
                        >
                            GitHub 
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Overview Text -->
            <div class="max-w-4xl mx-auto space-y-6 mt-16 text-neutral-300 leading-relaxed">
                <p class="text-lg">
                    Dorm Dojo was born from a simple realization: the transition to college is overwhelming, and dorm shopping is chaotic.
                    I wanted to build a platform that didn't just sell products, but provided a
                    <span class="text-white font-bold">curated blueprint for college living.</span>
                </p>

                <p class="text-lg">
                    The challenge was balancing a massive catalog of items with a high-end, lifestyle-first user interface.
                    Unlike traditional retailers, Dorm Dojo organizes the shopping experience by "vibe" and "necessity,"
                    ensuring students get exactly what they need without the clutter.
                </p>

                <p class="text-lg">
                    Built on Shopify's backend infrastructure, the platform combines the reliability of established e-commerce
                    with a custom-designed frontend that feels premium, intentional, and made specifically for college students.
                </p>
            </div>
        </section>

        <!-- 01. HIGHLIGHTS -->
        <section id="highlights" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-blue-500 mb-4 font-bold">01. Highlights</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Pillars of the platform.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                Dorm Dojo combines curated product selection with educational resources and premium design
                to create a comprehensive platform for college students preparing for dorm life.
            </p>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">Curated Essentials</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">A data-driven approach to move-in lists. We analyzed thousands of dorm layouts to recommend products that actually fit and serve a purpose.</p>
                </div>

                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">The Crash Course</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">Beyond shopping, we provide a "Dorm Living Crash Course"—interactive guides on laundry, roommate etiquette, and space optimization.</p>
                </div>

                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">Premium UX</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">The site feels like a high-end lookbook. Smooth transitions, large imagery, and minimal copy keep the focus on the lifestyle aspiration.</p>
                </div>
            </div>
        </section>

        <!-- 02. PRINCIPLES -->
        <section id="principles" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-blue-500 mb-4 font-bold">02. Principles</h3>
            <h2 class="text-4xl font-medium text-white mb-8">The Dojo Way.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                Every decision in building Dorm Dojo was guided by these core principles that keep the
                platform focused on what students actually need.
            </p>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-blue-500/20 mb-4">01</div>
                        <h4 class="text-white font-bold text-xl mb-4">Simplicity First</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            A college student's life is already complex. The shopping experience should be the exact opposite.
                        </p>
                    </div>
                </div>

                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-blue-500/20 mb-4">02</div>
                        <h4 class="text-white font-bold text-xl mb-4">Visual Truth</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            We use real student dorm photos, not sterile studio shots. Authenticity builds trust.
                        </p>
                    </div>
                </div>

                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-blue-500/20 mb-4">03</div>
                        <h4 class="text-white font-bold text-xl mb-4">Speed is UX</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            Mobile-first optimization for the student on the go. Instant search and one-click checkouts.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 03. STATUS -->
        <section id="impact" class="max-w-6xl mx-auto pt-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-blue-500 mb-4 font-bold">03. Current Status</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Ready for Move-In.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                Dorm Dojo successfully launched during my freshman year and continues to help students
                navigate the overwhelming process of preparing for college dorm life.
            </p>

            <!-- Metrics -->
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full"></div>
                    <div class="relative z-10">
                        <h4 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-4 font-bold">Launch Status</h4>
                        <div class="text-5xl font-bold text-white mb-4">V1.0<span class="text-blue-500">_</span></div>
                        <p class="text-sm text-neutral-400">Successfully soft-launched for the 2025 Winter Semester. Scaling operations for the Summer rush.</p>
                    </div>
                </div>

                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
                    <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full"></div>
                    <div class="relative z-10">
                        <h4 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-4 font-bold">Student Feedback</h4>
                        <p class="text-lg text-white font-medium italic mb-4">"Literally saved my move-in day. The checklists are a lifesaver."</p>
                        <p class="text-sm text-neutral-400">Feedback from early users during beta testing.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</OnMount>

<style>
    .gradient-bg {
        pointer-events: none;
        background: radial-gradient(ellipse at top, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
    }

    section {
        scroll-margin-top: 5rem;
    }

    h1, h2 {
        letter-spacing: -0.03em;
    }
</style>