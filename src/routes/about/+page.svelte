<script>
	import ImageSlider from "$lib/components/ImageSlider.svelte";

    const image_paths = [
        "brothers.webp", // Keep
        "peak-aura.webp", // Keep
        "competition.webp", // Keep

        "shenanigans.webp", // Keep
        "orange-kid.webp", // Keep
        "many-man.webp", // Keep
        "el-gimnasio.webp", // Keep
    ]
</script>

<ImageSlider {image_paths} />