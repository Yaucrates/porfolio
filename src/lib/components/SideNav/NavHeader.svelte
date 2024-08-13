<script>
	import ChevronRight from "$lib/components/Logos/ChevronRight.svelte";
	import Logo from "../Logos/Logo.svelte";
</script>

<header class="w-full h-60 px-2 my-2 flex flex-col justify-around">
    <div class="px-5 pt-3 w-full h-fit flex justify-end"><Logo /></div>
    <a href="/about" class="w-fit flex items-center group">
        <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" />
        <h1 class="text-lg group-hover:text-cyan-500 transition-all duration-300">About</h1>
    </a>
    <a href="/experience" class="w-fit flex items-center group">
        <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" />
        <h1 class="text-lg group-hover:text-cyan-500 transition-all duration-300">Experience</h1>
    </a>
    <a href="/projects" class="w-fit flex items-center group">
        <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" />
        <h1 class="text-lg group-hover:text-cyan-500 transition-all duration-300">Projects</h1>
    </a>
</header>