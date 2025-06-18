<script lang="ts">
	import ExperienceCard from "$lib/components/ExperienceCard.svelte";
	import OnMount from "$lib/components/OnMount.svelte";
	import { fly } from "svelte/transition";
</script>

<svelte:head>
	<title>Experience</title>
	<meta name="description" content="Take a look a Yousif's work history." />
</svelte:head>

<OnMount>
    <div in:fly={{ y: 200, duration: 1300 }} class="w-full py-32 gap-32 flex flex-col justify-center items-center">
        <ExperienceCard background_src="/experience-images/ImpartEducation.png" logo_src="/experience-images/ImpartLogo.svg" header="May 2025 - Current | Impart Education" title="Full Stack Engineer" description="Spearheaded development of a scalable web-based education platform. Built and maintained end-to-end features using Sveltekit on the frontend and Node.js on the backend." />
        <ExperienceCard background_src="/experience-images/tva-work.webp" logo_src="/experience-images/TennesseeValleyAuthorityLogo.svg" header="May 2024 - May 2025 | Tennessee Valley Authority" title="Data Engineering Intern" description="Focused on creating ways of retrieving and easily accessing data for power lines and transmission." />
        <ExperienceCard background_src="/experience-images/utk.webp" logo_src="/experience-images/UTK-Logo.png" header="August 2023 - Current | University of Tennessee Knoxville" title="CS Teacher's Assistant" description="Provided support to students with their code by assisting in generating ideas, helping debug code, and clarifying concepts for Introduction to Computer Science & Data Structures and Algorithms." />
    </div>
</OnMount>