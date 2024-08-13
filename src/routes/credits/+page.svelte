<script>
	import OnMount from "$lib/components/OnMount.svelte";
	import { fly } from "svelte/transition";

</script>

<OnMount>
    <div in:fly={{ y: 200, duration: 1300 }} class="text-xl w-full h-full gap-2 flex flex-col justify-center items-center">
        <p>This website was inspired by the following people:</p>
        <p>Layout - <a href="https://www.ethanchng.com/" target="_blank" class="text-cyan-500">Ethan Chng</a></p>
        <p>Design - <a href="https://brittanychiang.com/" target="_blank" class="text-cyan-500">Brittany Chiang</a></p>
        <p>Project Cards - <a href="https://www.perryw.ca/" target="_blank" class="text-cyan-500">Perry Wang</a></p>
    </div>
</OnMount>