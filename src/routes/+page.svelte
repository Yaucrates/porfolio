<script lang="ts">
    import FeaturedProjectCard, { type FeaturedProject } from '$lib/components/landing/FeaturedProjectCard.svelte';
	import CompanyTab, { type Company } from '$lib/components/landing/CompanyTab.svelte';
    import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
    import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
    import StarIcon from '$lib/components/icons/StarIcon.svelte';
    import { fly } from 'svelte/transition';

    const companies: Company[] = [
        {
            id: 'nexus',
            name: 'Nexus',
            status: 'current',
            logoSrc: '/experience-images/NexusAILogo.png',
            link: 'https://www.asknexus.ai/'
        },
        {
            id: 'impart-education',
            name: 'Impart Education',
            status: 'past',
            logoSrc: '/experience-images/ImpartLogo.svg',
            link: 'https://www.imparteducation.com/'
        },
        {
            id: 'tva',
            name: 'Tennessee Valley Authority',
            status: 'past',
            logoSrc: '/experience-images/TennesseeValleyAuthorityLogo.svg'
        }
    ];

    const featuredProjects: FeaturedProject[] = [
        {
            id: 'impart-education',
            title: 'Impart Education',
            description: 'Architected a scalable web-based education platform using SvelteKit and Node.js. Developed interactive demo content to showcase software capabilities.',
            techStack: ['SvelteKit', 'Node.js', 'education', 'web-platform'],
            imageSrc: '/projects/impart-education-new.webp',
            link: 'https://www.imparteducation.com/'
        },
        {
            id: 'dormdojo',
            title: 'Dorm Dojo',
            githubRepo: 'dormdojo',
            githubOwner: 'Yaucrates',
            description: 'A headless e-commerce storefront built with the Shopify API. The original store is no longer active, so the live demo uses placeholder products.',
            techStack: ['Shopify API', 'e-commerce', 'headless', 'storefront'],
            imageSrc: '/projects/DormDojoHomepage.webp',
            link: 'https://github.com/Yaucrates/dormdojo'
        }
    ];

    let clickCount = $state(0);
    let currentTime = $state(new Date().toLocaleTimeString('en-GB', { hour12: false }));

    setInterval(() => {
        currentTime = new Date().toLocaleTimeString('en-GB', { hour12: false });
    }, 1000);
</script>

<svelte:head>
	<title>Yousif Abdulhussein</title>
	<meta name="description" content="My SWE portfolio." />
</svelte:head>

<div in:fly={{ y: 200, duration: 1300 }} class="max-w-6xl mx-auto px-8 pt-44 pb-8 space-y-20">
    
    <!-- HERO SECTION -->
    <section class="space-y-6">
        <div class="max-w-3xl flex flex-col gap-6">
            <h1 class="text-5xl md:text-4xl font-bold text-neutral-200">Hey! I'm <span class="text-cyan-500">Yousif Abdulhussein</span></h1>
            <p class="text-lg text-neutral-400">
                I'm currently working as a SWE @ <a href="https://www.asknexus.ai/" class="underline decoration-dashed decoration-1 transition-all duration-300">Nexus</a>.
                I love writing software actually helps people. Currently, I’m diving into the
                world of indie hacking and am focused on creating software that empowers people
                to take control of their own <a href="https://www.imparteducation.com/" class="underline decoration-dashed decoration-1 transition-all duration-300">education</a>.
            </p>

            <div class="flex gap-4 items-center">
                <a
                    href="https://github.com/Yaucrates"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="gap-2 flex items-center text-neutral-400 hover:text-neutral-200 transition-colors duration-300"
                    aria-label="Github Icon"
                >
                    <GithubIcon scale={0.8} /> Github
                </a>
                <span class="font-thin">|</span>
                <a
                    href="https://www.linkedin.com/in/yousif-abdulhussein-23400a203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="gap-2 flex items-center text-neutral-400 hover:text-neutral-200 transition-colors duration-300"
                    aria-label="LinkedIn Icon"
                >
                    <LinkedInIcon scale={0.6} /> LinkedIn
                </a>
                <span class="font-thin">|</span>
                <a
                    href="/about"
                    class="gap-2 flex text-neutral-400 hover:text-neutral-200 transition-colors duration-300 group"
                >
                    More about me <span class="group-hover:translate-x-1 transition-all duration-300">→</span>
                </a>
            </div>
        </div>

        <div class="w-full max-w-2xl">
            <div class="flex flex-wrap gap-4 justify-start">
                {#each companies as company}
                    <CompanyTab {company} />
                {/each}
            </div>
        </div>
    </section>

    <!-- FEATURED PROJECTS -->
    <section class="space-y-8">
        <div class="w-full flex justify-between items-center">
            <h2 class="text-2xl font-semibold text-neutral-200 flex items-center gap-2">
                <span class="text-cyan-500"><StarIcon scale={0.9} /></span> Featured Projects
            </h2>
            <a
                href="/projects"
                class="text-neutral-400 hover:text-neutral-200 transition-colors duration-300 group"
            >
                View all <span class="inline-block group-hover:translate-x-1 transition-all duration-300">→</span>
            </a>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
            {#each featuredProjects as project}
                <FeaturedProjectCard {project} />
            {/each}
        </div>
    </section>

    <!-- WIDGET GRID (The Bento Box) -->
    <section class="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        <!-- Theme Widget -->
        <div class="md:col-span-3 bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-4">
            <h4 class="text-xs font-bold flex items-center gap-2 text-neutral-400 uppercase tracking-widest">🏷️ Theme</h4>
            <div class="grid grid-cols-3 gap-2 text-[10px]">
                <button class="bg-neutral-800 py-1 rounded border border-neutral-700">Latte</button>
                <button class="bg-neutral-800 py-1 rounded border border-neutral-700">Frappe</button>
                <button class="bg-neutral-800 py-1 rounded border border-neutral-700">Macchiato</button>
            </div>
            <button class="w-full bg-neutral-800 py-1 text-[10px] rounded border border-neutral-600">Mocha</button>
            <div class="flex flex-wrap gap-2 pt-2">
                {#each ['#f5e0dc', '#f2cdcd', '#f5c2e7', '#cba6f7', '#f38ba8', '#fab387', '#f9e2af', '#a6e3a1', '#94e2d5', '#89dceb', '#89b4fa', '#b4befe'] as color}
                    <div class="w-5 h-5 rounded-md border border-neutral-700" style="background-color: {color}"></div>
                {/each}
            </div>
        </div>

        <!-- Connect Widget -->
        <div class="md:col-span-3 bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
            <div class="space-y-2">
                <h4 class="text-xs font-bold flex items-center gap-2 text-neutral-400 uppercase tracking-widest">💬 Let's Connect</h4>
                <p class="text-xs text-neutral-500">Always open to interesting projects and conversations.</p>
            </div>
            <button class="w-full bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 py-2 rounded-lg text-xs flex items-center justify-center gap-2">
                📅 Book a Chat
            </button>
        </div>

        <!-- Location Widget -->
        <div class="md:col-span-3 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden relative group">
            <div class="absolute top-4 left-4 z-10 space-y-1">
                <h4 class="text-xs font-bold flex items-center gap-2 text-white uppercase tracking-widest">📍 Currently Based In</h4>
            </div>
            <div class="h-32 bg-neutral-900 overflow-hidden">
                <!-- Map Placeholder Image -->
                <img src="https://images.unsplash.com/photo-1503197979108-c824168d51a8?auto=format&fit=crop&q=80&w=400" alt="Toronto" class="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"/>
            </div>
            <div class="p-4 flex justify-between items-center bg-neutral-900">
                <span class="text-[10px] text-neutral-400">Knoxville, TN</span>
                <span class="text-[10px] font-mono text-neutral-400 flex items-center gap-1">🕐 {currentTime}</span>
            </div>
        </div>

        <!-- Clicker Widget -->
        <div class="md:col-span-3 bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 text-center">
            <h3 class="text-4xl font-bold text-cyan-500">{754818 + clickCount}</h3>
            <button
                onclick={() => clickCount++}
                class="bg-cyan-500 text-neutral-900 px-6 py-2 rounded-lg text-xs font-bold hover:scale-105 active:scale-95 transition-all duration-300"
            >
                CLICK ME
            </button>
            <p class="text-[10px] text-neutral-500 uppercase tracking-tighter">You've clicked {clickCount} times</p>
        </div>

        <!-- Recent Commits -->
        <div class="md:col-span-6 bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-4">
            <div class="flex justify-between items-center">
                <h4 class="text-xs font-bold flex items-center gap-2 text-neutral-400 uppercase tracking-widest">Recent Commits</h4>
                <span class="text-[10px] text-neutral-600 underline">[info]</span>
            </div>
            <div class="space-y-3 font-mono text-[11px]">
                <div class="flex justify-between">
                    <span class="text-neutral-300">nyx: feat: integrate latest commits fetching...</span>
                    <span class="text-green-500">+305 / -23</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-300">Katib: Merge pull request #4 from JasonLoves...</span>
                    <span class="text-green-500">+41 / -8</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-300">Katib: Add author filtering to GetMostRecent...</span>
                    <span class="text-green-500">+41 / -8</span>
                </div>
            </div>
            <div class="flex justify-between items-center pt-2">
                <a href="#" class="text-[10px] text-neutral-500 flex items-center gap-1">View on GitHub ↗</a>
                <div class="flex gap-0.5 h-1.5 w-40 rounded-full overflow-hidden">
                    <div class="bg-blue-400 w-1/2"></div>
                    <div class="bg-red-400 w-1/6"></div>
                    <div class="bg-yellow-400 w-1/6"></div>
                    <div class="bg-green-400 w-1/6"></div>
                </div>
            </div>
        </div>

        <!-- Latest Posts -->
        <div class="md:col-span-6 bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-4">
             <div class="flex justify-between items-center">
                <h4 class="text-xs font-bold flex items-center gap-2 text-neutral-400 uppercase tracking-widest">Latest Posts</h4>
                <span class="text-neutral-600">↗</span>
            </div>
            <div class="space-y-3">
                {#each [
                    {t: "AWS Lambda InvalidEntryPoint Debugging", d: "Nov 28, 2025"},
                    {t: "AWS CDK Credentials Hell", d: "Nov 26, 2025"},
                    {t: "Hello World", d: "Oct 19, 2025"},
                    {t: "Stop Burning CPU on Dead FastAPI Streams", d: "Jul 06, 2025"}
                ] as post}
                <div class="flex justify-between items-center text-[11px] group cursor-pointer">
                    <span class="text-neutral-300 group-hover:text-cyan-500 transition-colors">{post.t}</span>
                    <span class="text-neutral-600 font-mono">- {post.d}</span>
                </div>
                {/each}
            </div>
        </div>
    </section>
</div>