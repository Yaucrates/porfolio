<script>
	import OnMount from "$lib/components/OnMount.svelte";
	import { fly } from "svelte/transition";
</script>

<svelte:head>
	<title>Credits</title>
	<meta name="description" content="Credits to where Yousif got inspiration from when making this site." />
</svelte:head>

<OnMount>
    <div in:fly={{ y: 200, duration: 1300 }} class="p-4 text-xl w-full h-full gap-2 flex flex-col justify-center items-center">
        <p class="text-center">This website was inspired by the following people:</p>
        <p>Layout - <a href="https://www.ethanchng.com/" target="_blank" class="text-cyan-500">Ethan Chng</a></p>
        <p>Hero - <a href="https://jasoncameron.dev/" target="_blank" class="text-cyan-500">Jason Cameron</a></p>
        <p>Design - <a href="https://brittanychiang.com/" target="_blank" class="text-cyan-500">Brittany Chiang</a></p>
        <p>Project Cards - <a href="https://www.perryw.ca/" target="_blank" class="text-cyan-500">Perry Wang</a></p>
    </div>
</OnMount>