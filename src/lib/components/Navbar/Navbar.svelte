<script>
	import NavHeader from "$lib/components/Navbar/NavHeader.svelte";
	import NavBody from "$lib/components/Navbar/NavBody.svelte";
	import NavFooter from "$lib/components/Navbar/NavFooter.svelte";
</script>

<nav class="hidden transition h-screen w-48 border-e-2 fixed base:flex flex-col border-neutral-800 select-none">
    <NavHeader />
    <NavBody />
    <NavFooter />
</nav>

<style>
    .transition {
        view-transition-name: header;
    }
</style>

