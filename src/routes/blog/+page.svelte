<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Yousif Abdulhussein's Blog." />
</svelte:head>


<section class="w-full p-12 flex flex-col items-center">
	<h1 class="text-3xl font-bold">Welcome To My <span class="text-cyan-500">Blog!</span></h1>

	<div class="w-full mt-12 gap-16 grid grid-cols-1 lg:grid-cols-2 items-center">
		{#each data.blogs as blog}
			<a href="/blog/{blog.path}" class="flex flex-col sm:flex-row min-h-56 border-2 border-neutral-800 px-12 py-8 gap-6 rounded-xl hover:shadow-xs hover:shadow-cyan-500 transition-all duration-300 overflow-hidden relative group">
                <div class="flex flex-col gap-4">
                    <div>
                        <h2 class="text-neutral-300 text-4xl font-semibold group-hover:text-cyan-500 transition-all duration-300">
                            {blog.title}
                        </h2>
                        <p class="pt-4 text-lg text-neutral-400">
                            {blog.description}
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row justify-between text-neutral-400 mt-auto">
                        <p>{Array.isArray(blog.authors) ? blog.authors.join(", ") : ""}</p>
                        <p>{blog.date}</p>
                    </div>
                </div>
			</a>
		{/each}
	</div>
</section>
