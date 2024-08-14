<script lang="ts">
	import ChevronRight from "$lib/components/Logos/ChevronRight.svelte";

    export let name: string;
</script>

<a href={`/${name.toLowerCase().replace(' ', '-')}`} class="w-fit flex items-center group">
    <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" />
    <h1 class="text-lg group-hover:text-cyan-500 transition-all duration-300">{name}</h1>
</a>