<script>
    let expanded = false;
</script>

<button on:click={() => expanded = !expanded } aria-expanded={expanded} type="button" class="transitionClass group relative h-6 w-6 z-30" style="--width:1.75rem;--thickness:0.125rem;--gap:0.4rem;--color:#06b6d4;--duration:300ms">
    <span class="absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(-150%-var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-full before:rounded-full before:bg-[var(--color)] before:transition-[width] before:delay-[calc(var(--duration)*1/3)] before:duration-[calc(var(--duration)*2/3)] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:w-[60%] before:group-aria-expanded:delay-0"></span>
    <span class="absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color)] transition-transform duration-[calc(var(--duration)*2/3)] group-aria-expanded:rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)]"></span>
    <span class="absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(50%+var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-[60%] before:rounded-full before:bg-[var(--color)] before:transition-[right] before:delay-[calc(var(--duration)*1/3)] before:duration-[calc(var(--duration)*2/3)] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:right-[40%] before:group-aria-expanded:delay-0"></span>
</button>

<div class={`transitionClass ${expanded ? "opacity-100" : "opacity-0"} h-full w-full bg-black/10 backdrop-blur-sm absolute top-0 right-0 z-20 transition-all duration-300`}>
    <div class={`${expanded ? "w-96" : "w-0"} h-full absolute flex items-center justify-center top-0 right-0 bg-neutral-900 shadow-md shadow-neutral-900 transition-all duration-300`}>
        <ul class="text-lg mr-24 flex flex-col gap-4">
            <li><a href="/about" class="flex gap-2 hover:text-cyan-500 text-neutral-300 transition-all duration-300"><span class="text-cyan-500">1.</span>About</a></li>
            <li><a href="/about" class="flex gap-2 hover:text-cyan-500 text-neutral-300 transition-all duration-300"><span class="text-cyan-500">2.</span>Experience</a></li>
            <li><a href="/about" class="flex gap-2 hover:text-cyan-500 text-neutral-300 transition-all duration-300"><span class="text-cyan-500">3.</span>Work</a></li>
            <li><a href="/about" class="flex gap-2 hover:text-cyan-500 text-neutral-300 transition-all duration-300"><span class="text-cyan-500">4.</span>Contact</a></li>
        </ul>
    </div>
</div>

<style>
    .transitionClass {
        view-transition-name: header;
    }
</style>