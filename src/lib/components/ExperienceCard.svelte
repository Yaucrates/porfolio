<script lang="ts">
	import { fly } from "svelte/transition";
	import OnMount from "./OnMount.svelte";

    interface Props {
        header: string,
        title: string,
        description: string,
        background_src: string,
        logo_src: string,
        href?: string,
        blur?: 'none' | 'sm' | 'md' | 'lg';
    }

    let { header, title, description, background_src, logo_src, href, blur = 'none' }: Props = $props();
</script>

<OnMount>
    <a target="_blank" in:fly={{ y: 200, duration: 1300 }} class="min-h-[500px] w-5/6 md:w-4/5 lg:w-3/4 border-2 flex flex-col rounded-lg bg-neutral-850 border-neutral-800 relative hover:shadow-2xl hover:shadow-neutral-700 transition-all duration-300 overflow-hidden" {href}>
        <img src={background_src} alt="work background" class="w-full h-full absolute bottom-0 left-0 opacity-40 rounded-lg object-cover blur-{blur}"/>
        
        <header class="flex justify-between items-center py-8 px-12 z-10">
            <h1 class="uppercase">{header}</h1>
            <img src={logo_src} class="hidden sm:block rounded-sm m-4" alt="Company Logo" width="24" height="24" aria-hidden={true}/>
        </header>
        
        <div class="w-full h-full flex z-10">
            <div class="h-full w-full pt-32 pb-10 flex flex-col gap-4 justify-center items-center">
                <h2 class="w-3/4 lg:w-1/2 text-3xl font-medium">{title}</h2>
                <p class="w-3/4 lg:w-1/2 text-neutral-400">{description}</p>
            </div>
        </div>
    </a>
</OnMount>