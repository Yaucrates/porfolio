<script>
	export let data;
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.description} />
</svelte:head>

<div class="w-full flex justify-center py-24">
    <section class="max-w-prose w-full prose prose-invert">
        <svelte:component this={data.post.content} />
    </section>
</div>