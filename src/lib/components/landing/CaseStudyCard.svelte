<script lang="ts">
	import GithubLogoWhite from '$lib/components/logos/GithubLogoWhite.svelte';
    import StackLogo from '../logos/StackLogo.svelte';

	export interface CaseStudy {
		id: string;
		title: string;
		githubRepo?: string;
		githubOwner?: string;
		description: string;
		techStack: string[];
		imageSrc: string;
		link?: string;
		contributors?: number;
		contributorName?: string;
	}

	interface Props {
		caseStudy: CaseStudy;
	}

	let { caseStudy }: Props = $props();
</script>

<a
	href={caseStudy.link}
	rel="noopener noreferrer"
	class="group relative rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-neutral-700/50"
>
	<!-- Gradient overlay on hover -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
	></div>

	<!-- Content -->
	<div class="h-full relative z-10 p-6 flex flex-col justify-between">
        <div class="flex flex-col gap-4">
            <!-- Header -->
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="text-xl font-semibold text-neutral-200">{caseStudy.title}</h3>
                    {#if caseStudy.githubRepo}
                        <p class="text-sm text-neutral-500">
                            {caseStudy.githubOwner || 'Yaucrates'} / {caseStudy.githubRepo}
                        </p>
                    {/if}
                </div>
                <div class="group-hover:-translate-y-1 transition-transform duration-300">
                    {#if caseStudy.githubRepo}
                        <GithubLogoWhite scale={0.2} />
                    {:else}
                        <StackLogo scale={1} />
                    {/if}
                </div>
            </div>

            <!-- Description -->
            <p class="text-neutral-400 text-sm">{caseStudy.description}</p>

            <!-- Tech stack tags -->
            <div class="flex flex-wrap gap-2">
                {#each caseStudy.techStack as tech}
                    <span
                        class="px-2 py-1 text-xs rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700"
                    >
                        {tech}
                    </span>
                {/each}
            </div>
        </div>

		<!-- Image preview -->
		<div class="mt-2 rounded-lg overflow-hidden border border-neutral-800">
			<img
				src={caseStudy.imageSrc}
				alt={caseStudy.title}
				class="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
			/>
		</div>
	</div>
</a>
