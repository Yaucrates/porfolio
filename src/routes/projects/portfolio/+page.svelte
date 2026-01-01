<script lang="ts">
    import { navState } from "$lib/components/navigation/nav-state.svelte";
    import OnMount from "$lib/components/OnMount.svelte";
    import Showcase from "$lib/components/Showcase.svelte";
    import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
    import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
    import StarIcon from '$lib/components/icons/StarIcon.svelte';
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    onMount(() => {
        navState.sections = [
            { id: "overview", label: "Overview" },
            { id: "highlights", label: "Highlights" },
            { id: "stack", label: "Tech Stack" },
            { id: "features", label: "Features" },
            { id: "design", label: "Design Philosophy" },
            { id: "impact", label: "Current Status" }
        ];
    });
</script>

<svelte:head>
	<title>Portfolio Website | Case Study</title>
	<meta name="description" content="A case study breaking down my personal portfolio website built with SvelteKit." />
</svelte:head>

<OnMount>
    <div class="w-full min-h-screen absolute top-0 gradient-bg"></div>
    <div in:fly={{ y: 200, duration: 1300 }} class="text-[#e5e5e5] min-h-screen pt-44 pb-24">

        <!-- Hero Section -->
        <section id="overview" class="max-w-6xl mx-auto px-6">
            <header class="text-center mb-16">
                <h1 class="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4 italic">Portfolio Website</h1>
                <p class="text-neutral-500 text-lg uppercase tracking-widest font-light">A Modern SvelteKit Portfolio</p>
                <p class="text-neutral-600 text-sm mt-4 font-medium">Independent Developer — December 2024 to Present</p>
            </header>

            <!-- Main Showcase - Custom Portfolio Display -->
            <div class="w-full space-y-8">
                <!-- Primary Browser Window -->
                <div class="relative w-full">
                    <div class="border border-neutral-800 rounded-3xl bg-neutral-900/20 backdrop-blur-sm p-6 shadow-2xl overflow-hidden">
                        <div class="w-full bg-neutral-850 rounded-2xl shadow-2xl overflow-hidden border border-neutral-800">
                            <!-- Browser Chrome -->
                            <div class="h-12 bg-neutral-850 flex items-center px-5 gap-4 border-b border-neutral-800">
                                <div class="flex gap-2">
                                    <div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                    <div class="w-3 h-3 rounded-full bg-[#28c940]"></div>
                                </div>
                                <div class="flex-1 max-w-2xl bg-[#171717] h-8 rounded-lg border border-neutral-800 flex items-center px-4 gap-3">
                                    <svg class="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span class="text-sm text-neutral-400">yousifabdulhussein.com</span>
                                </div>
                            </div>

                            <!-- Hero Screenshot -->
                            <div class="relative bg-[#0a0a0a] overflow-hidden">
                                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

                                <div class="relative z-10 px-8 md:px-16 py-20 space-y-8">
                                    <!-- Hero Text -->
                                    <div class="max-w-3xl space-y-6">
                                        <h2 class="text-3xl md:text-5xl font-bold text-neutral-200">
                                            Hey! I'm <span class="text-cyan-500">Yousif Abdulhussein</span>
                                        </h2>
                                        <p class="text-base md:text-lg text-neutral-400 leading-relaxed">
                                            I'm currently working as a SWE @ <span class="text-cyan-500 underline decoration-dashed">Nexus</span>.
                                            I love writing software that actually helps people. Currently, I'm diving into the
                                            world of indie hacking and am focused on creating software that empowers people
                                            to take control of their own <span class="text-cyan-500 underline decoration-dashed">education</span>.
                                        </p>

                                        <div class="flex flex-wrap gap-4 items-center text-sm">
                                            <div class="flex items-center gap-2 text-neutral-400">
                                                <GithubIcon scale={0.7} /> Github
                                            </div>
                                            <span class="text-neutral-700">|</span>
                                            <div class="flex items-center gap-2 text-neutral-400">
                                                <LinkedInIcon scale={0.5} /> LinkedIn
                                            </div>
                                            <span class="text-neutral-700">|</span>
                                            <div class="flex items-center gap-2 text-neutral-400">
                                                More about me →
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Experience Cards Preview -->
                                    <div class="flex flex-wrap gap-3">
                                        <div class="flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-700 bg-neutral-800/50">
                                            <div class="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                                                <img src="/experience-images/NexusAILogo.jpg" alt="Nexus" class="w-full h-full object-contain" />
                                            </div>
                                            <div class="flex flex-col">
                                                <span class="text-xs text-neutral-200 font-medium">Nexus</span>
                                                <span class="text-[10px] text-neutral-500">Current</span>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-700 bg-neutral-800/50">
                                            <div class="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                                                <img src="/experience-images/CeptionLabsFavicon.png" alt="CeptionLabs" class="w-full h-full object-contain" />
                                            </div>
                                            <div class="flex flex-col">
                                                <span class="text-xs text-neutral-200 font-medium">CeptionLabs</span>
                                                <span class="text-[10px] text-neutral-500">Past</span>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-700 bg-neutral-800/50">
                                            <div class="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                                                <img src="/experience-images/TennesseeValleyAuthorityLogo.svg" alt="Tennessee Valley Authority" class="w-full h-full object-contain" />
                                            </div>
                                            <div class="flex flex-col">
                                                <span class="text-xs text-neutral-200 font-medium">TVA</span>
                                                <span class="text-[10px] text-neutral-500">Past</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feature Highlights Grid -->
                <div class="grid md:grid-cols-3 gap-6">
                    <!-- Component Architecture -->
                    <div class="relative group">
                        <div class="absolute -inset-px bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                            <div class="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                                <svg class="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                                </svg>
                            </div>
                            <h4 class="text-white font-bold mb-3">Component-Based</h4>
                            <p class="text-sm text-neutral-400 leading-relaxed">
                                Reusable Svelte components create a consistent design system and enable rapid development.
                            </p>
                        </div>
                    </div>

                    <!-- Responsive Design -->
                    <div class="relative group">
                        <div class="absolute -inset-px bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                            <div class="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                                <svg class="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <h4 class="text-white font-bold mb-3">Responsive Design</h4>
                            <p class="text-sm text-neutral-400 leading-relaxed">
                                Mobile-first approach with adaptive layouts that work seamlessly across all devices and screen sizes.
                            </p>
                            <div class="mt-4 flex items-center justify-center gap-2">
                                <svg class="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                </svg>
                                <svg class="w-5 h-5 text-cyan-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                </svg>
                                <svg class="w-6 h-6 text-cyan-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- Type Safety -->
                    <div class="relative group">
                        <div class="absolute -inset-px bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                            <div class="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                                <svg class="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                                </svg>
                            </div>
                            <h4 class="text-white font-bold mb-3">Type-Safe</h4>
                            <p class="text-sm text-neutral-400 leading-relaxed">
                                Built with TypeScript for robust type checking and superior developer experience.
                            </p>
                            <div class="mt-4 flex items-center gap-2">
                                <svg class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span class="text-xs text-neutral-400">Zero runtime type errors</span>
                            </div>
                        </div>
                    </div>
                </div>

            <!-- Project Meta -->
            <div class="max-w-4xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-900 pt-12">
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Scope</h3>
                    <p class="text-sm text-neutral-400">Personal Portfolio & Project Showcase</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Timeline</h3>
                    <p class="text-sm text-neutral-400">December 2024 — Ongoing</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Stack</h3>
                    <p class="text-sm text-neutral-400">SvelteKit, TypeScript, Tailwind CSS, Vercel</p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-3 font-bold">Links</h3>
                    <div class="flex flex-col gap-2">
                        <a
                            href="https://www.yousifabdulhussein.com/"
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
                            href="https://github.com/Yaucrates/porfolio" 
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
                    How do you build a portfolio that stands out in a sea of generic templates? This portfolio was designed
                    from scratch with a focus on <span class="text-white font-bold">clarity, performance, and professional presentation</span>.
                    Rather than using a pre-built template, I chose to architect a custom solution using SvelteKit, giving me complete
                    control over every aspect of the user experience.
                </p>

                <p class="text-lg">
                    The portfolio serves a dual purpose: showcasing my technical work while demonstrating my development
                    capabilities through the site itself. Every component is built with reusability in mind, from the case
                    study layouts to the navigation system. The architecture prioritizes performance with code splitting,
                    optimized images, and minimal JavaScript.
                </p>

                <p class="text-lg">
                    Built with SvelteKit and TypeScript, the portfolio combines modern web development practices with
                    a clean, minimalist aesthetic. Tailwind CSS enables rapid development while maintaining consistency,
                    and the component-based architecture makes it easy to add new projects and case studies over time.
                </p>
            </div>
        </section>

        <!-- 01. HIGHLIGHTS -->
        <section id="highlights" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-4 font-bold">01. Highlights</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Pillars of the portfolio.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The portfolio was built around three core principles: clean and modern design, performance-first architecture,
                and excellent developer experience for easy maintenance and updates.
            </p>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">Clean, Modern Design</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">Minimalist aesthetic with carefully chosen typography, smooth transitions, and a dark color scheme. Every element is intentional, focusing user attention on content rather than decoration.</p>
                </div>

                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">Performance-First</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">Built with SvelteKit for optimal performance. Features include code splitting, image optimization, and minimal JavaScript bundle size. Fast load times across all devices.</p>
                </div>

                <div class="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                    <div class="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                    </div>
                    <h4 class="text-white font-bold mb-3">Developer Experience</h4>
                    <p class="text-sm text-neutral-400 leading-relaxed">Type-safe development with TypeScript, component-based architecture with Svelte, and Tailwind CSS for rapid styling. Easy to maintain and extend.</p>
                </div>
            </div>
        </section>

        <!-- 02. TECH STACK -->
        <section id="stack" class="max-w-6xl mx-auto px-6 py-24">
            <div class="bg-neutral-900 border border-neutral-800 rounded-3xl p-12 relative overflow-hidden">
                <div class="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full"></div>
                <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-4 font-bold">02. Tech Stack</h3>
                <h2 class="text-3xl font-medium text-white mb-8">Built with modern tools.</h2>

                <p class="text-neutral-400 leading-relaxed mb-6 max-w-3xl relative z-10">
                    I chose SvelteKit over more traditional frameworks like Next.js or Nuxt because of its simplicity and performance.
                    Svelte compiles to vanilla JavaScript, resulting in smaller bundle sizes and faster runtime performance. The reactive
                    programming model feels natural and requires less boilerplate than React or Vue.
                </p>

                <p class="text-neutral-400 leading-relaxed mb-12 max-w-3xl relative z-10">
                    TypeScript provides type safety throughout the application, catching errors at compile time rather than runtime.
                    Tailwind CSS enables rapid development with utility classes while maintaining design consistency. The entire
                    stack is deployed on Vercel for automatic CI/CD and optimal global distribution.
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                    <div class="bg-neutral-800/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
                        <div class="text-cyan-500 mb-3">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        </div>
                        <h6 class="text-white font-bold text-xs mb-2 uppercase tracking-wide">SvelteKit Framework</h6>
                        <p class="text-[11px] text-neutral-500 leading-relaxed">Reactive UI with minimal JavaScript. Compiles to optimized vanilla JS for better performance.</p>
                    </div>
                    <div class="bg-neutral-800/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
                        <div class="text-cyan-500 mb-3">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                        </div>
                        <h6 class="text-white font-bold text-xs mb-2 uppercase tracking-wide">TypeScript</h6>
                        <p class="text-[11px] text-neutral-500 leading-relaxed">Type safety and better developer experience. Catches errors early in development.</p>
                    </div>
                    <div class="bg-neutral-800/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
                        <div class="text-cyan-500 mb-3">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
                        </div>
                        <h6 class="text-white font-bold text-xs mb-2 uppercase tracking-wide">Tailwind CSS</h6>
                        <p class="text-[11px] text-neutral-500 leading-relaxed">Utility-first styling for rapid development and consistent design system.</p>
                    </div>
                    <div class="bg-neutral-800/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
                        <div class="text-cyan-500 mb-3">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
                        </div>
                        <h6 class="text-white font-bold text-xs mb-2 uppercase tracking-wide">Component Architecture</h6>
                        <p class="text-[11px] text-neutral-500 leading-relaxed">Reusable UI components for consistent layouts and easy maintenance.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 03. FEATURES -->
        <section id="features" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-4 font-bold">03. Features</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Key capabilities.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The portfolio includes several features designed to showcase projects effectively while maintaining
                excellent performance and user experience.
            </p>

            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <h4 class="text-white font-bold text-sm">Dynamic Case Studies</h4>
                    </div>
                    <p class="text-sm text-neutral-400 leading-relaxed">
                        Built with reusable components like the Showcase component, making it easy to create detailed
                        project breakdowns with consistent styling and interactive elements.
                    </p>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <h4 class="text-white font-bold text-sm">Responsive Navigation</h4>
                    </div>
                    <p class="text-sm text-neutral-400 leading-relaxed">
                        Section-based navigation with smooth scrolling. The navigation state is managed reactively,
                        automatically updating based on page structure.
                    </p>
                </div>

                <div class="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <h4 class="text-white font-bold text-sm">Contact Integration</h4>
                        </div>
                    <p class="text-sm text-neutral-400 leading-relaxed">
                        Direct links to GitHub, LinkedIn, and other professional platforms. Easy for visitors to
                        connect and view additional work.
                    </p>
                </div>
            </div>
        </section>

        <!-- 04. DESIGN PHILOSOPHY -->
        <section id="design" class="max-w-6xl mx-auto px-6 py-24">
            <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-4 font-bold">04. Design Philosophy</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Design principles.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                Every design decision follows core principles that prioritize clarity, responsiveness, and accessibility.
            </p>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-cyan-500/20 mb-4">01</div>
                        <h4 class="text-white font-bold text-xl mb-4">Clarity Over Complexity</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            Focus on clear communication. No unnecessary animations or visual noise. Every design choice serves the goal of showcasing work effectively.
                        </p>
                    </div>
                </div>

                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-cyan-500/20 mb-4">02</div>
                        <h4 class="text-white font-bold text-xl mb-4">Mobile-First Responsive</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            Designed for all screen sizes. The layout adapts gracefully from mobile phones to large desktop displays using Tailwind's responsive utilities.
                        </p>
                    </div>
                </div>

                <div class="relative group">
                    <div class="absolute -inset-px bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full">
                        <div class="text-6xl font-bold text-cyan-500/20 mb-4">03</div>
                        <h4 class="text-white font-bold text-xl mb-4">Accessibility Matters</h4>
                        <p class="text-sm text-neutral-400 leading-relaxed">
                            Semantic HTML, proper heading hierarchy, and ARIA labels where needed. The portfolio is built to be accessible to all users.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 05. CURRENT STATUS -->
        <section id="impact" class="max-w-6xl mx-auto pt-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-4 font-bold">05. Current Status</h3>
            <h2 class="text-4xl font-medium text-white mb-8">Live and evolving.</h2>
            <p class="text-neutral-400 leading-relaxed max-w-3xl mb-12">
                The portfolio is live in production, actively maintained, and continuously improved with new projects
                and case studies.
            </p>

            <!-- Metrics -->
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl rounded-full"></div>
                    <div class="relative z-10">
                        <h4 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-4 font-bold">Project State</h4>
                        <div class="text-5xl font-bold text-white mb-4">Production<span class="text-cyan-500">_</span></div>
                        <p class="text-sm text-neutral-400">The portfolio is live and actively maintained. Regular updates add new case studies and improvements to the design and functionality.</p>
                    </div>
                </div>

                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
                    <div class="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 blur-3xl rounded-full"></div>
                    <div class="relative z-10">
                        <h4 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-4 font-bold">Scalability</h4>
                        <div class="text-5xl font-bold text-white mb-4">Built for Growth<span class="text-cyan-500">_</span></div>
                        <p class="text-sm text-neutral-400">Structured to easily add new projects, case studies, and experiences. The component-based architecture makes scaling simple.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</OnMount>

<style>
    .gradient-bg {
        pointer-events: none;
        background: radial-gradient(ellipse at top, rgba(6, 182, 212, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
    }

    section {
        scroll-margin-top: 5rem;
    }

    h1, h2 {
        letter-spacing: -0.03em;
    }
</style>
