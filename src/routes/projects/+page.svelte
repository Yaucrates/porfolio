<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import OnMount from "$lib/components/OnMount.svelte"
    import { fly } from "svelte/transition"
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Checkout what Yousif's working on or has worked on." />
</svelte:head>

<OnMount>
    <div in:fly={{ y: 200, duration: 1300 }} class="py-16 gap-12 h-full flex flex-col justify-center items-center">
        <ProjectCard href="https://www.imparteducation.com/" title="Impart Education" subtitle="Web Project -- May 25'" description="Designing a Virtual School to allow students to learn advanced college courses." src="/projects/impart-education-new.webp" />
        <ProjectCard href="https://cali-dojo.vercel.app/" title="CaliDojo" subtitle="Jan 1st, 25'" description="Designed a mockup for a website that provides calisthenics information along with an affiliate marketing shopping page as a demo for a client." src="/projects/CaliDojo.webp" />
        <ProjectCard href="https://ceptionlabs.vercel.app/" title="Ception Labs" subtitle="December 24'" description="My own web development agency which I did some projects (such as CaliDojo) under!" src="/projects/CeptionLabs.webp" />
        <ProjectCard href="https://www.yousifabdulhussein.com/" title="Personal Portfolio" subtitle="August 24'" description="Designed this very portfolio to help showcase what I'm working on!" src="/projects/Personal-Portfolio.webp" />
        <ProjectCard href="https://dormdojo.vercel.app/" title="Dorm Dojo" subtitle="E-Commerce Project — May ’24" description="A headless e-commerce storefront built with the Shopify API. The original store is no longer active, so the live demo uses placeholder products (e.g., snowboards instead of dorm decor)." src="/projects/DormDojoHomepage.webp" />
    </div>
</OnMount>