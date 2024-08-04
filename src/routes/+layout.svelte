<script lang="ts">
	import Logo from "../components/sidebar/Logo.svelte";
	import MajorLink from "../components/sidebar/Major-Link.svelte";
    // import type { LayoutData } from './$types';
    
    // export let data: LayoutData;
</script>


<nav class="h-screen w-48 border-e-2 fixed flex flex-col border-neutral-800">
    <div class="w-full h-60 py-7 px-2 flex flex-col justify-around">
        <Logo />
        <MajorLink href="/about" name="About" />
        <MajorLink href="/experience" name="Experience" />
        <MajorLink href="/projects" name="Projects" />
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