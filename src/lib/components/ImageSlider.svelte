<script lang="ts">
    export let image_paths: string[];

    import { onMount } from "svelte";

    let track: HTMLElement | null = null,
        body: HTMLElement | null = null;
    
    const handleOnDown = (e: MouseEvent | Touch) => {
        if (!track) return;

        track.dataset.mouseDownAt = `${e.clientX}`;
    };

    const handleOnUp = () => {
        if (!track) return;

        track.dataset.mouseDownAt = "0";  
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = (e: MouseEvent | Touch) => {
        if (!track || !body) return;

        if(track.dataset.mouseDownAt === "0") return;
        
        const mouseDelta = parseFloat(track.dataset.mouseDownAt ?? '0') - e.clientX,
                maxDelta = track.offsetWidth / 2;
        
        const percentage = (mouseDelta / maxDelta) * -100,
                nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage ?? '0') + percentage,
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100 * (track.offsetWidth - body.offsetWidth) / track.offsetWidth);
        
        track.dataset.percentage = `${nextPercentage}`;
        
        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });
        
        for(const image of track.getElementsByClassName("image")) {
            image.animate({
            objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    }

    const handleTouchStart = (e: TouchEvent) => handleOnDown(e.touches[0]);

    const handleTouchMove = (e: TouchEvent) => handleOnMove(e.touches[0]);
    
    const handleTouchEnd = () => handleOnUp();

    onMount(() => {
        body = document.getElementById("body");
        track = document.getElementById("image-track");
    })
</script>

<div id="body" class="w-full h-full overflow-hidden relative" lang="ts">
    <div id="image-track" class="w-max" role="presentation"
        on:mousedown={handleOnDown}
        on:mouseup={handleOnUp}
        on:mousemove={handleOnMove}
        on:mouseleave={handleOnUp}
        on:touchstart={handleTouchStart}
        on:touchmove={handleTouchMove}
        on:touchend={handleTouchEnd}
    >
        {#each image_paths as path, i (i)}
            <img class="image" src={path} alt="slider" draggable="false"/>
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
        user-select: none; /* -- Prevent image highlighting -- */
    }

    #image-track > .image {
        width: 40vmin;
        height: 56vmin;
        object-fit: cover;
        object-position: 100% center;
    }
</style>