<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		showBrowserChrome?: boolean;
		class?: string;
		children: Snippet;
		leftCard?: Snippet;
		rightCard?: Snippet;
	}

	let {
		showBrowserChrome = false,
		class: className = '',
		children,
		leftCard,
		rightCard
	}: Props = $props();
</script>

<!-- Outer Wrapper (positioning context for floating cards) -->
<div class="relative mx-auto w-full min-h-[600px] {className}">
	<!-- Browser Window Frame -->
	<div
		class="border border-neutral-800 rounded-[40px] bg-neutral-900/20 backdrop-blur-sm p-4 shadow-2xl overflow-hidden"
	>
		<!-- Browser Chrome -->
		<div
			class="w-full h-full bg-neutral-850 rounded-xl shadow-2xl overflow-hidden flex flex-col border border-neutral-800"
		>
			{#if showBrowserChrome}
				<!-- Toolbar -->
				<div
					class="h-10 bg-neutral-850 flex items-center px-4 gap-4 border-b border-neutral-800"
				>
					<div class="flex gap-2">
						<div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
						<div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
						<div class="w-3 h-3 rounded-full bg-[#28c940]"></div>
					</div>
					<div
						class="flex-1 max-w-xl bg-[#171717] h-6 rounded-md border border-neutral-800 flex items-center px-3 gap-2"
					>
						<div class="w-2 h-2 rounded-full border border-neutral-500"></div>
						<div class="h-2 w-32 bg-neutral-700 rounded-full"></div>
					</div>
				</div>
			{/if}

			<!-- Web Content -->
			<div
				class="flex-1 relative flex flex-col items-center overflow-hidden"
			>
				{@render children()}
			</div>
		</div>
	</div>

	<!-- LEFT FLOATING CARD -->
	{#if leftCard}
		<div
			class="hidden md:block absolute -left-10 top-1/2 -translate-y-1/2 w-64 bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-2xl p-5 shadow-lg shadow-neutral-700/50 z-20"
		>
			{@render leftCard()}
		</div>
	{/if}

	<!-- RIGHT FLOATING CARD -->
	{#if rightCard}
		<div
			class="hidden md:block absolute -right-10 bottom-10 w-80 bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-2xl p-5 shadow-lg shadow-neutral-700/50 z-20"
		>
			{@render rightCard()}
		</div>
	{/if}
</div>
