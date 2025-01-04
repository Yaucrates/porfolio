<script>
	import ImageSlider from "$lib/components/ImageSlider.svelte";
	import OnMount from "$lib/components/OnMount.svelte";
	import { fly } from "svelte/transition";

    const images = [
        "brothers.webp",
        "peak-aura.webp",
        "competition.webp",
        "shenanigans.webp",
        "orange-kid.webp",
        "many-man.webp",
        "el-gimnasio.webp"
    ]
</script>

<svelte:head>
	<title>About Me</title>
	<meta name="description" content="All about Yousif Abdulhussein." />
</svelte:head>

<OnMount>
    <div class="w-full flex flex-col gap-4">
        <div in:fly={{ y: 200, duration: 1300 }} class="w-full h-[56vmin] relative select-none">
            <div class="w-full h-full px-8 flex justify-center items-center absolute z-20 uppercase">
                <h1 class="header-gradient text-5xl sm:text-7xl font-black text-center text-neutral-300">Yousif <br class="block md:hidden"/> <span class="hidden min-[400px]:block">Abdulhussein</span></h1>
            </div>
            <ImageSlider {images} />
        </div>

        <div in:fly={{ y: 400, duration: 1300 }} class="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-16 mt-10 sm:mt-20">
            <div class="p-4 min-[400px]:p-16 lg:p-0 lg:w-2/5 flex flex-col gap-4">
                <div class="flex items-center gap-4">
                    <div class="text-2xl text-nowrap flex gap-2">
                        <span class="text-cyan-500">1.</span>
                        <span class="font-semibold text-neutral-200">About Me</span>
                    </div>
                    <hr class="w-full border-[1px] border-neutral-300"/>
                </div>
                <div class="text-lg flex flex-col gap-4 text-neutral-400">
                    <p>
                        Hello! My name is Yousif, and I love creating cool things. My love for engineering
                        originated from playing Minecraft as a kid. Turns out, learning to design redstone
                        contraptions teaches you a lot about engineering.
                    </p>
                    <p>
                        Fast-forward to today, and I'm a junior at the University of Tennessee Knoxville
                        studying Computer Science. My interests lie in numerous fields, but Quantum Computers
                        have particularly caught my eye.
                    </p>
                    <p>
                        Outside of work, my hobbies include calisthenics, making videos, and finding ways of
                        worrying my parents (to their dismay, I've gotten interested in skydiving).
                    </p>
                </div>
            </div>

            <div class="relative w-fit h-fit group rounded-lg aspect-square">
                <img src="/about/headshot.webp" alt="headshot" class="h-64 w-64 relative z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-100"/>
                <div class="w-full h-full absolute top-0 left-0 border-2 border-cyan-800 bg-transparent translate-x-3 group-hover:translate-x-4 translate-y-3 group-hover:translate-y-4 transition-all duration-100 z-0"></div>
            </div>
        </div>

        <div in:fly={{ y: 600, duration: 1300 }} class="w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-16 my-10">
            <div class="relative lg:w-2/5 lg:h-2/5">
                <div class="bg-gradient-to-r from-neutral-900 from-0% to-transparent to-50% h-full w-full absolute top-0 left-0 z-10 pointer-events-none"></div>
                <div class="bg-gradient-to-l from-neutral-900 from-0% to-transparent to-50% h-full w-full absolute top-0 right-0 z-10 pointer-events-none"></div>
                <img src="/about/utk.webp" alt="headshot" class="rounded-lg" />
            </div>        

            <div class="p-4 min-[400px]:p-16 lg:p-0 lg:w-2/5 flex flex-col gap-4">
                <div class="flex items-center gap-4">
                    <div class="text-2xl text-nowrap flex gap-2">
                        <span class="text-cyan-500">2.</span>
                        <span class="font-semibold text-neutral-200">Education</span>
                    </div>
                    <hr class="w-full border-[1px] border-neutral-300"/>
                </div>
                <div class="text-lg flex flex-col gap-4 text-neutral-400">
                    <p>
                        I am currently studying Computer Science at the Tickle College of Engineering at the
                        University of Tennessee, Knoxville. Although that's where my formal study of many subjects
                        took place, it's not where most of my education stemmed from.
                    </p>
                    <p>
                        Since my childhood, the internet has taught me more than school ever could. I was (and
                        still am) a very curious child. Beginning my sophomore year of high school, I started getting
                        interested in learning many topics that my school did not offer, so I turned to the
                        web.
                    </p>
                    <p>
                        Since then, I've taken over a dozen online courses (my two favorites being CS50x and
                        18.06sc) and continue learning things that interest me. I've written a couple blogs on Medium
                        reviewing these courses. They have now been transferred to my blog. I am currently working on
                        my own courses to be able to give back to the community.
                    </p>
                </div>
            </div>
        </div>
    </div>
</OnMount>