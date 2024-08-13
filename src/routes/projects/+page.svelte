<script lang="ts">
    // import type { PageData } from './$types';
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    
    // export let data: PageData;
</script>

<div class="py-20 gap-12 h-full flex flex-col justify-center items-center">
    <ProjectCard title="Personal Portfolio" subtitle="August 24'" description="Designed my personal portfolio to help showcase what I'm working on!" src="Personal-Portfolio.webp" />
    <ProjectCard title="Dorm Dojo" subtitle="E-Commerce Project -- May 24'" description="An E-Commerce site that hooked into the shopify API to make a headless storefront." src="DormDojoHomepage.webp" />
</div>