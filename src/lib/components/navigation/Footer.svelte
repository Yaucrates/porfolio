<script>
	import Misc from "$lib/components/navigation/block/Misc.svelte";
	import PersonalWork from "$lib/components/navigation/block/Personal-Work.svelte";
    import Socials from "$lib/components/navigation/block/Socials.svelte";
</script>

<footer class="md:hidden w-full flex justify-center items-center p-7 border-t-2 border-neutral-800">
    <div class="xs:w-3/4 sm:w-full gap-y-16 grid xs:grid-cols-2 sm:grid-cols-4 justify-between">
        <Socials />
        <div class="w-fit flex flex-col gap-2">
            <h2 class="text-sm text-neutral-500">Navigation</h2>
            <a href="/about" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">About</a>
            <a href="/experience" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">Experience</a>
            <a href="/projects" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">Projects</a>
            <a href="/contact" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">Contact</a>
        </div>
        <PersonalWork />
        <Misc />
    </div>
</footer>