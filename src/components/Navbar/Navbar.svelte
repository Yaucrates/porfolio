<script>
	import NavHeader from "./NavHeader.svelte";
	import NavBody from "./NavBody.svelte";
	import NavFooter from "./NavFooter.svelte";
</script>

<nav class="transition h-screen w-48 border-e-2 fixed flex flex-col border-neutral-800 select-none">
    <NavHeader />
    <NavBody />
    <NavFooter />
</nav>

<style>
    .transition {
        view-transition-name: header;
    }
</style>

