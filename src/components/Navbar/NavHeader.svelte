<script>
	import ChevronRight from "../SVGs/ChevronRight.svelte";
	import Logo from "./Logo.svelte";
</script>

<div class="w-full h-60 px-2 my-2 flex flex-col justify-around">
    <div class="mx-5 mt-3"><Logo /></div>
    <a href="/about" class="flex items-center group">
        <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" />
        <h1 class="text-lg hover:text-neutral-400 transition-all duration-300">About</h1>
    </a>
    <a href="/experience" class="flex items-center group">
        <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" />
        <h1 class="text-lg hover:text-neutral-400 transition-all duration-300">Experience</h1>
    </a>
    <a href="/projects" class="flex items-center group">
        <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" />
        <h1 class="text-lg hover:text-neutral-400 transition-all duration-300">Projects</h1>
    </a>
    <a href="/resume" class="flex items-center group">
        <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" />
        <h1 class="text-lg hover:text-neutral-400 transition-all duration-300">Resume</h1>
    </a>
</div>