<!--
    Credit to fractilis
    https://fractils.fractal-hq.com/#localStorageStore
    https://github.com/braebo/fractils/tree/main
-->

<!-- 
	@component
	Mounts a component when the DOM is ready.  Useful for intro animations.
 -->
 <script>
	import { onMount } from 'svelte'
    
    let { children } = $props();

	let loaded = $state(false);

	onMount(() => {
		loaded = true
	})
</script>

{#if loaded}
    {@render children()}
{/if}