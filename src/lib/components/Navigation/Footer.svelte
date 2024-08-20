<script>
	import Misc from "./Block/Misc.svelte";
	import PersonalWork from "./Block/Personal-Work.svelte";
    import Socials from "./Block/Socials.svelte";
</script>

<footer class="md:hidden w-full gap-12 xs:gap-0 flex flex-col xs:flex-row items-center xs:items-start xs:justify-around p-7 border-t-2 border-neutral-800">
    <Socials />
    <PersonalWork />
    <Misc />
</footer>