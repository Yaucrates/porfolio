<script lang="ts">
    import { onMount } from "svelte";

    let { images }: { images: string[] } = $props();

    const doubled_paths = [...images, ...images];

    let track: HTMLElement | null = null,
        body: HTMLElement | null = null;

    const imageScroll = () => {
        if (!track || !body) return;
        
        const maxPixels = -track.offsetWidth / 2; // -100 * (track.offsetWidth - body.offsetWidth) / track.offsetWidth
        const maxPercentage = -100 * (track.offsetWidth - body.offsetWidth) / track.offsetWidth
        const duration = 2500 * images.length;

        track.animate({
            transform: `translate(calc(${maxPixels}px - 2vmin), -50%)`
        }, { duration, fill: "forwards", iterations: Infinity });
        
        for(const image of track.getElementsByClassName("image")) {
            image.animate({
            objectPosition: `${100 + maxPercentage}% center`
            }, { duration, direction: "alternate", fill: "forwards", iterations: Infinity });
        }
    }

    onMount(() => {
        body = document.getElementById("body");
        track = document.getElementById("image-track");

        imageScroll();
    })
</script>

<div id="body" class="w-full h-full overflow-hidden relative" lang="ts">
    <div class="bg-gradient-to-r from-neutral-900 from-0% to-transparent to-80% h-full w-full absolute top-0 left-0 z-10 pointer-events-none"></div>
    <div class="bg-gradient-to-l from-neutral-900 from-0% to-transparent to-80% h-full w-full absolute top-0 right-0 z-10 pointer-events-none"></div>
    <div id="image-track" class="w-max" role="presentation"
    >
        {#each doubled_paths as path, i (i)}
            <img class="image" src={`/about/about-slider/${path}`} alt="slider" draggable="false"/>
        {/each}
    </div>
</div>


<style>
    #image-track {
        display: flex;
        gap: 4vmin;
        position: absolute;
        left: 0%;
        top: 50%;
        transform: translate(0%, -50%); 
        user-select: none;
    }

    #image-track > .image {
        width: 40vmin;
        height: 56vmin;
        object-fit: cover;
        object-position: 100% center;
    }
</style>