<script lang="ts">
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
	import TwitterIcon from '$lib/components/icons/TwitterIcon.svelte';

	export interface SocialLink {
		name: string;
		url: string;
		icon: 'github' | 'linkedin' | 'twitter';
	}

	interface Props {
		links: SocialLink[];
	}

	let { links }: Props = $props();
</script>

<div class="flex gap-4">
	{#each links as link}
		<a
			href={link.url}
			target="_blank"
			rel="noopener noreferrer"
			class="text-neutral-400 hover:text-neutral-200 transition-colors duration-300"
			aria-label={link.name}
		>
			{#if link.icon === 'github'}
				<GithubIcon />
			{:else if link.icon === 'linkedin'}
				<LinkedInIcon />
			{:else if link.icon === 'twitter'}
				<TwitterIcon />
			{/if}
		</a>
	{/each}
</div>
