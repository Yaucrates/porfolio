<script>
	import NavHeader from "$lib/components/SideNav/NavHeader.svelte";
	import NavBody from "$lib/components/SideNav/NavBody.svelte";
	import NavFooter from "$lib/components/SideNav/NavFooter.svelte";
</script>

<nav class="hidden transitionClass h-screen w-48 border-e-2 fixed md:flex flex-col border-neutral-800 select-none z-max">
    <NavHeader />
    <NavBody />
    <NavFooter />
</nav>

<style>
    .transitionClass {
        view-transition-name: header;
    }
</style>

