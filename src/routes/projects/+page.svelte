<script lang="ts">
    // import type { PageData } from './$types';
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import OnMount from "$lib/components/OnMount.svelte"
    import { fly } from "svelte/transition"
    
    // export let data: PageData;
</script>

<OnMount>
    <div in:fly={{ y: 200, duration: 1300 }} class="py-10 gap-10 h-full flex flex-col justify-center items-center">
        <p class="text-lg">
            Checkout my resume <a href="https://drive.google.com/file/d/1N-R5zF4zIZY0U26gKk62BidB75kiD7YS/view?usp=sharing" target="_blank" class="text-cyan-500 underline underline-offset-2">here</a>.
        </p>
        <ProjectCard title="Personal Portfolio" subtitle="August 24'" description="Designed my personal portfolio to help showcase what I'm working on!" src="Personal-Portfolio.webp" />
        <ProjectCard title="Dorm Dojo" subtitle="E-Commerce Project -- May 24'" description="An E-Commerce site that hooked into the shopify API to make a headless storefront." src="DormDojoHomepage.webp" />
    </div>
</OnMount>