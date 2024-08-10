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

<div class="w-full h-[56vmin] relative">
    <div class="w-full flex justify-center items-center p-8 min-[400px]:p-20">
        <div class="text-hero w-full lg:w-3/5 text-xl sm:text-5xl">
            I'm passionate about <br class="hidden sm:block"/>
            solving challenging problems that
            <span class="text-info-hero-serif">improve lives.</span>
        </div>
    </div>
    
    <ImageSlider {image_paths} />
</div>

<style>
    .text-hero {
        text-align: left;
        letter-spacing: -1px;
        text-shadow: 0 4px 10px #0057ff33, 0 -4px 10px #ff5a0026, 0 0 30px #fff3;
        font-weight: 500;
        line-height: 110%;
    }

    .text-info-hero-serif {
        background-image: linear-gradient(to bottom, #f2f2f2 50%, #f2f2f233);
        letter-spacing: -1px;
        text-shadow: 0 4px 6px #0057ff26, 0 -4px 6px #ff5a001a, 0 0 20px #ffffff40;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        font-family: Gloock, sans-serif;
        font-style: italic;
    }
</style>