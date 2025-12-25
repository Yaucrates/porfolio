<script lang="ts">
	export interface Company {
		id: string;
		name: string;
		status: 'current' | 'past';
		logoSrc: string;
		link?: string;
	}

	interface Props {
		company: Company;
	}

	let { company }: Props = $props();
</script>

<a
	href={company.link || '#'}
	class="flex items-center gap-3 px-4 py-3 rounded-lg border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-300 group"
	target={company.link ? '_blank' : undefined}
	rel={company.link ? 'noopener noreferrer' : undefined}
>
	<div
		class="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center overflow-hidden"
	>
		<img src={company.logoSrc} alt={company.name} class="w-full h-full object-contain" />
	</div>
	<div class="flex flex-col">
		<span class="text-neutral-200 font-medium">{company.name}</span>
		<span class="text-xs text-neutral-500">
			{company.status === 'current' ? 'Current' : 'Past'}
		</span>
	</div>
</a>
