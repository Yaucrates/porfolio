<script lang="ts">
	export let data;

    const blogs = data.blogs;

    const blogsByYear = blogs.reduce((acc, blog) => {
        const year = blog.date.split('-')[0];
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(blog);
        return acc;
    }, {} as { [key: string]: Blog[] });
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Yousif Abdulhussein's Blog." />
</svelte:head>

<h1 class="text-3xl font-bold p-6 text-center">Welcome To My <span class="text-cyan-500">Blog!</span></h1>
<hr class="w-full h-px border-b-[1px] border-neutral-800"/>

<section class="w-full p-12 flex justify-center">
    <div class="max-w-prose font-medium text-xl gap-16 flex flex-col-reverse">
        {#each Object.keys(blogsByYear) as year}
            <div class="flex flex-col gap-4">
                {year}
                {#each blogsByYear[year] as blog}
                    <div class="text-base flex gap-12">
                        <p class="font-normal">{blog.date}</p>
                        <a href="/blog/{blog.path}" class="hover:text-cyan-500 transition-all duration-300">{blog.title}</a>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</section>
