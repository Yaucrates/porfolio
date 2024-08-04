<script>
	import NavBody from "./NavBody.svelte";
	import NavHeader from "./NavHeader.svelte";
</script>

<nav class="transition h-screen w-48 border-e-2 fixed flex flex-col border-neutral-800 select-none">
    <NavHeader />
    <NavBody />
    <div class="w-full p-7 grow" />
</nav>

<style>
    .transition {
        view-transition-name: header;
    }
</style>

