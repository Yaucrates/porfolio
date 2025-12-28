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
        <ExperienceCard background_src="/experience-images/NexusAI.jpg" logo_src="/experience-images/NexusAILogo.png" header="August 2025 - Current | Nexus" title="Software Engineering Intern" description="Engineered production features for an AI-powered K-12 data engine used by schools. Launched collaborative AI chat sharing, developed context-gathering interfaces to enhance model accuracy, and upgraded dynamic charting capabilities to visualize district-wide metrics." href="https://www.asknexus.ai/" />
        <ExperienceCard background_src="/experience-images/CeptionLabs.png" logo_src="/experience-images/CeptionLabsFavicon.png" header="May 2025 - August 2025 | CeptionLabs" title="Freelance Web Designer/Engineer" description="Designed and developed custom web applications for local businesses, focusing on modern UI, performance, and real-world usability." href="https://ceptionlabs.vercel.app/" blur="sm" />
        <ExperienceCard background_src="/experience-images/tva-work.webp" logo_src="/experience-images/TennesseeValleyAuthorityLogo.svg" header="May 2024 - May 2025 | Tennessee Valley Authority" title="Data Engineering Intern" description="Optimized data retrieval workflows for high-voltage transmission systems. Designed efficient pipelines to improve accessibility and query speed for critical power infrastructure analytics." blur="sm" />
        <ExperienceCard background_src="/experience-images/utk.webp" logo_src="/experience-images/UTK-Logo.png" header="August 2023 - December 2025 | University of Tennessee Knoxville" title="CS Teaching Assistant" description="Mentored students in Systems Programming, Data Structures, Algorithms, and Intro to CS. Facilitated complex debugging sessions, reinforced core concepts, and guided students on how to develop good practices to improve academic performance." />
    </div>
</OnMount>