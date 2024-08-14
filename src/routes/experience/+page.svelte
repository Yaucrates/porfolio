<script lang="ts">
	import ExperienceCard from "$lib/components/ExperienceCard.svelte";
	import OnMount from "$lib/components/OnMount.svelte";
	import { fly } from "svelte/transition";

    // import type { PageData } from './$types';
    // export let data: PageData;
</script>

<svelte:head>
	<title>Experience</title>
	<meta name="description" content="Take a look a Yousif's work history." />
</svelte:head>

<OnMount>
    <div in:fly={{ y: 200, duration: 1300 }} class="w-full py-32 gap-32 flex flex-col justify-center items-center">
        <ExperienceCard background_src="/experience-images/tva-work.webp" logo_src="/experience-images/TennesseeValleyAuthorityLogo.svg" header="May 2024 - Current | Database Engineer Intern" title="Powerline and Transmission Data" description="Focused on creating ways of retrieving and easily accessing data for power lines and transmission." />
        <ExperienceCard background_src="/experience-images/utk.webp" logo_src="/experience-images/UTK-Logo.png" header="August 2023 - May 2024 | Teacher's Assistant" title="CS Teacher's Assistant" description="Provided support to students with their code by assisting in generating ideas, helping debug code, and clarifying concepts." />
    </div>
</OnMount>