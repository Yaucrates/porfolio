<script>
    import Logo from "$lib/components/logos/Logo.svelte";
	// import MainLink from "./Block/MainLink.svelte";
	// import Socials from "./Block/Socials.svelte";
	// import Misc from "./Block/Misc.svelte";
	// import PersonalWork from "./Block/Personal-Work.svelte";
</script>

<nav class="hidden transitionClass h-screen w-48 border-e-2 fixed md:flex flex-col border-neutral-800 select-none z-max">
    <header class="w-full h-60 px-2 my-2 flex flex-col justify-around">
        <!-- <div class="px-5 pt-3 w-full h-fit flex justify-end"><Logo /></div> -->
        <!-- <MainLink name="About"/>
        <MainLink name="Experience"/>
        <MainLink name="Projects"/>
        <MainLink name="Contact"/> -->
    </header>
    <div class="w-full p-7 gap-12 border-y-2 flex flex-col border-neutral-800">
        <!-- <PersonalWork />
        <Socials /> -->
    </div>
    <div class="w-full p-7">
        <!-- <Misc /> -->
    </div>
</nav>

<style>
    .transitionClass {
        view-transition-name: header;
    }
</style>