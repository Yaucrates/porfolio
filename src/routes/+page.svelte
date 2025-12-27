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
            logoSrc: '/experience-images/TennesseeValleyAuthorityLogo.svg',
            link: 'https://www.tva.com/'
        }
    ];

    const featuredProjects: FeaturedProject[] = [
        {
            id: 'impart-education',
            title: 'Impart Education',
            description: 'Architected a scalable web-based education platform using SvelteKit and Node.js. Developed interactive demo content to showcase software capabilities.',
            techStack: ['SvelteKit', 'Node.js', 'education', 'web-platform'],
            imageSrc: '/projects/impart-education-new.webp',
            link: '/projects/impart-education'
        },
        {
            id: 'dormdojo',
            title: 'Dorm Dojo',
            githubRepo: 'dormdojo',
            githubOwner: 'Yaucrates',
            description: 'A headless e-commerce storefront built with the Shopify API. The original store is no longer active, so the live demo uses placeholder products.',
            techStack: ['Shopify API', 'e-commerce', 'headless', 'storefront'],
            imageSrc: '/projects/DormDojoHomepage.webp',
            link: '/projects/dorm-dojo'
        }
    ];

    let currentTime = $state(new Date().toLocaleTimeString('en-GB', { hour12: false }));

    setInterval(() => {
        currentTime = new Date().toLocaleTimeString('en-GB', { hour12: false });
    }, 1000);
</script>

<svelte:head>
	<title>Yousif Abdulhussein</title>
	<meta name="description" content="My SWE portfolio." />
</svelte:head>

<div in:fly={{ y: 200, duration: 1300 }} class="max-w-6xl mx-auto px-8 pt-44 pb-24 space-y-20">
    
    <!-- HERO SECTION -->
    <section class="space-y-6">
        <div class="max-w-3xl flex flex-col gap-6">
            <h1 class="text-5xl md:text-4xl font-bold text-neutral-200">Hey! I'm <span class="text-cyan-500">Yousif Abdulhussein</span></h1>
            <p class="text-lg text-neutral-400">
                I'm currently working as a SWE @ <a href="https://www.asknexus.ai/" class="text-cyan-500 underline decoration-dashed decoration-1 transition-all duration-300">Nexus</a>.
                I love writing software that actually helps people. Currently, I’m diving into the
                world of indie hacking and am focused on creating software that empowers people
                to take control of their own <a href="https://www.imparteducation.com/" class="text-cyan-500 underline decoration-dashed decoration-1 transition-all duration-300">education</a>.
            </p>

            <div class="flex flex-wrap gap-4 items-center">
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
                    class="gap-2 flex justify-center items-center text-neutral-400 hover:text-neutral-200 transition-colors duration-300 group"
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
</div>