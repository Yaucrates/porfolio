<script lang="ts">
    // import type { PageData } from './$types';

	import OnMount from "$lib/components/OnMount.svelte";
	import { fly } from "svelte/transition";

    
    // export let data: PageData;
</script>

<div class="w-full py-32 gap-32 flex flex-col justify-center items-center">

    <OnMount>
        <div in:fly={{ y: 200, duration: 1300 }} class="min-h-[500px] w-5/6 md:w-4/5 lg:w-3/4 border-2 flex flex-col rounded-lg bg-[rgb(30,30,30)] border-neutral-800 relative hover:shadow-2xl hover:shadow-neutral-700 transition-all duration-300">
            <img src="tva-work.webp" alt="tva" class="w-full h-full absolute bottom-0 left-0 opacity-40 rounded-lg"/>
            
            <header class="flex justify-between items-center py-8 px-12 z-10">
                <h1 class="uppercase">May 2024 - Current | Database Engineer Intern</h1>
                <img src="TennesseeValleyAuthorityLogo.svg" class="hidden sm:block rounded-sm m-4" alt="TVA Logo" width="24" height="24"/>
            </header>
            
            <div class="w-full h-full flex z-10">
                <div class="h-full w-full px-20 pt-32 pb-10 flex flex-col gap-4 justify-center items-center">
                    <h2 class="w-3/4 lg:w-1/2 text-3xl font-medium">Power Line and Transmission Data</h2>
                    <p class="w-3/4 lg:w-1/2 text-neutral-400">Focused on creating ways of retrieving and easily accessing data for power lines and transmission.</p>
                </div>
            </div>
        </div>
    </OnMount>

    <OnMount>
        <div in:fly={{ y: 200, duration: 1300 }} class="min-h-[500px] w-5/6 md:w-4/5 lg:w-3/4 border-2 flex flex-col rounded-lg bg-[rgb(30,30,30)] border-neutral-800 relative hover:shadow-2xl hover:shadow-neutral-700 transition-all duration-300">
            <img src="utk.webp" alt="tva" class="w-full h-full absolute bottom-0 left-0 opacity-40 rounded-lg"/>
            
            <header class="flex justify-between items-center py-8 px-12 z-10">
                <h1 class="uppercase">August 2023 - May 2024 | Teacher's Assistant</h1>
                <img src="UTK-Logo.png" class="hidden sm:block rounded-sm m-4" alt="TVA Logo" width="24" height="24"/>
            </header>
            
            <div class="w-full h-full flex z-10">
                <div class="h-full w-full px-20 pt-32 pb-10 flex flex-col gap-4 justify-center items-center">
                    <h2 class="w-3/4 lg:w-1/2 text-3xl font-medium">Power Line and Transmission Data</h2>
                    <p class="w-3/4 lg:w-1/2 text-neutral-400">Focused on creating ways of retrieving and easily accessing data for power lines and transmission.</p>
                </div>
            </div>
        </div>
    </OnMount>

</div>