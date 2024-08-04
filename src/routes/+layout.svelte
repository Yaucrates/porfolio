<script lang="ts">
	import Logo from "../components/Logo.svelte";

    // import type { LayoutData } from './$types';
    
    // export let data: LayoutData;
</script>


<nav class="h-screen w-48 border-e-2 fixed flex flex-col border-neutral-800">
    <div class="w-full h-60 py-7 px-2 flex flex-col justify-around">
        <Logo />
        <div class="flex items-center group">
            <svg class="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 6l6 6l-6 6" />
            </svg>
            <a href="/" class="text-lg hover:text-white transition-all duration-300">About</a>
        </div>
        <div class="flex items-center group">
            <svg class="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 6l6 6l-6 6" />
            </svg>
            <a href="/" class="text-lg hover:text-white transition-all duration-300">Experience</a>
        </div>
        <div class="flex items-center group">
            <svg class="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 6l6 6l-6 6" />
            </svg>
            <a href="/" class="text-lg hover:text-white transition-all duration-300">Projects</a>
        </div>
    </div>
    
    <div class="w-full h-64 border-y-2 border-neutral-800"/>
    <div class="w-full grow"/>
</nav>

<div class="ml-48">
    <slot />
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    * {
        font-family: "Poppins";
    }
</style>