<script lang="ts">
    // import type { PageData } from './$types';
    import OnMount from "$lib/components/OnMount.svelte";
    import { fly } from "svelte/transition"
    
    // export let data: PageData;
</script>

<OnMount>
    <div class="h-screen flex justify-center items-center select-none">
        <div class="w-3/4 gap-6 flex flex-col justify-center">
            <h3 in:fly={{ y: 200, duration: 1300 }} class="text-[14px] min-[350px]:text-[4vw] sm:text-2xl text-cyan-500">Hi, my name is</h3>
            <div class="text-[21px] min-[350px]:text-[6vw] sm:text-[5vw] md:text-[4.6vw] font-bold">
                <h1 in:fly={{ y: 300, duration: 1200 }} class="text-neutral-300">Yousif Abdulhussein.</h1>
                <h2 in:fly={{ y: 400, duration: 1100 }} class="text-neutral-400">I turn vision into action.</h2>
            </div>
            <p in:fly={{ y: 500, duration: 1000 }} class="sm:w-2/3 text-base sm:text-lg text-neutral-400">I’m a computer science major passionate about creating exceptional digital experiences. Currently, I’m focused on learning and building software through academic projects and personal initiatives.</p>
        </div>
    </div>
</OnMount>
