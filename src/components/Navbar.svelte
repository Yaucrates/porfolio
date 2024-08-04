<script>
	import Logo from "./Logo.svelte";
</script>

<nav class="transition h-screen w-48 border-e-2 fixed flex flex-col border-neutral-800 select-none">
    <div class="w-full h-60 px-2 my-2 flex flex-col justify-around">
        <Logo />
        <a href="/about" class="flex items-center group">
            <svg class="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a3a3a3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 6l6 6l-6 6" />
            </svg>
            <div class="text-lg hover:text-neutral-400 transition-all duration-300">About</div>
        </a>
        <a href="/experience" class="flex items-center group">
            <svg class="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a3a3a3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 6l6 6l-6 6" />
            </svg>
            <div class="text-lg hover:text-neutral-400 transition-all duration-300">Experience</div>
        </a>
        <a href="/projects" class="flex items-center group">
            <svg class="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a3a3a3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 6l6 6l-6 6" />
            </svg>
            <div class="text-lg hover:text-neutral-400 transition-all duration-300">Projects</div>
        </a>
    </div>
    
    <div class="w-full h-64 border-y-2 border-neutral-800"/>
    <div class="w-full grow"/>
</nav>

<style>
    .transition {
        view-transition-name: header;
    }
</style>

