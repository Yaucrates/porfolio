<script>
	import ImageSlider from "$lib/components/ImageSlider.svelte";

    const image_paths = [
        "brothers.webp",
        "peak-aura.webp",
        "competition.webp",
        "shenanigans.webp",
        "orange-kid.webp",
        "many-man.webp",
        "el-gimnasio.webp"
    ]
</script>

<div class="w-full flex flex-col gap-4">
    <div class="w-full h-[56vmin] relative select-none">
        <div class="w-full h-full px-8 flex justify-center items-center absolute z-20 uppercase">
            <h1 class="header-gradient text-5xl sm:text-7xl font-black text-center text-neutral-300">Yousif <br class="block md:hidden"/> <span class="hidden min-[400px]:block">Abdulhussein</span></h1>
        </div>
        <ImageSlider {image_paths} />
    </div>

    <div class="w-full flex items-center justify-center gap-8 my-20">
        <div class="w-2/5 flex flex-col gap-4">
            <div class="flex items-center gap-4">
                <div class="text-2xl text-nowrap flex gap-2">
                    <span class="text-cyan-500">1.</span>
                    <span class="font-semibold text-neutral-200">About Me</span>
                </div>
                <hr class="w-full border-[1px] border-neutral-300"/>
            </div>
            <div class="text-lg flex flex-col gap-4 text-neutral-400">
                <p class="">
                    Hello! My name is Yousif, and I love creating cool things. My love for engineering
                    originated from playing minecraft as a kid. Turns out, learning to design redstone
                    contraptions teaches you a lot about engineering.
                </p>
                <p class="">
                    Fast-forward to today, and I'm a junior at the University of Tennessee Knoxville
                    studying Computer Science. My interest lie in numerous fields, but Quantum Computers
                    have particularly caught my eye.
                </p>
                <p class="">
                    Outside of work, my hobbies include calesthenics, making videos, and finding ways of
                    worrying my parents (to their dismay, I've gotten interested in skydiving).
                </p>
            </div>
        </div>
        <button class="relative w-fit h-fit group rounded-lg aspect-square">
            <img src="headshot.webp" alt="headshot" class="h-64 w-64 relative z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-100"/>
            <div class="w-full h-full absolute top-0 left-0 border-2 border-cyan-800 bg-transparent translate-x-3 group-hover:translate-x-4 translate-y-3 group-hover:translate-y-4 transition-all duration-100 z-0"></div>
        </button>        
    </div>
</div>