<script>
    import Logo from "$lib/components/logos/Logo.svelte";
    import MainLink from "$lib/components/navigation/block/MainLink.svelte";
    import Misc from "$lib/components/navigation/block/Misc.svelte";
    import PersonalWork from "$lib/components/navigation/block/Personal-Work.svelte";
    import Socials from "$lib/components/navigation/block/Socials.svelte";
    import { page } from "$app/state";
    import { navState } from "./nav-state.svelte";
    
    const isCaseStudy = $derived(page.route.id?.startsWith("/projects/") ?? false);
    const caseStudySections = $derived(navState.sections);
</script>

{#if isCaseStudy}
    <!-- Table of Contents Sidebar -->
    <nav class="hidden md:flex transitionClass h-screen w-48 border-e-2 fixed flex-col border-neutral-800 select-none z-max p-6">
        <a href="/projects" class="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-12">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back
        </a>

        <div class="flex flex-col gap-4">
            <h3 class="text-neutral-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Contents</h3>
            {#each caseStudySections as section}
                <a 
                    href="#{section.id}" 
                    class="text-xs text-neutral-400 hover:text-white transition-colors border-r-2 border-transparent hover:border-neutral-500 pr-2"
                >
                    {section.label}
                </a>
            {/each}
        </div>
    </nav>
{:else}
    <nav class="hidden transitionClass h-screen w-48 border-e-2 fixed md:flex flex-col border-neutral-800 select-none z-max">
        <header class="w-full h-60 px-2 my-2 flex flex-col justify-around">
            <div class="px-5 pt-3 w-full h-fit"><Logo /></div>
            <MainLink name="About"/>
            <MainLink name="Experience"/>
            <MainLink name="Projects"/>
            <MainLink name="Contact"/>
        </header>
        <div class="w-full p-7 gap-12 border-y-2 flex flex-col border-neutral-800">
            <PersonalWork />
            <Socials />
        </div>
        <div class="w-full p-7">
            <Misc />
        </div>
    </nav>
{/if}

<style>
    .transitionClass {
        view-transition-name: header;
    }
</style>