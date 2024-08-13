<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let description: string;
    export let src: string;
</script>

<div class="w-3/4 h-60 min-[400px]:h-96 md:h-[30rem] lg:h-[42rem] p-px bg-border-gradient rounded-2xl group">
    <div class="w-full h-full p-2 bg-neutral-850 rounded-2xl">
        <div class="w-full h-full p-px bg-border-gradient border-[1px] border-neutral-800 hover:border-neutral-700 transition-all duration-300 rounded-2xl relative">
            <div class="w-full h-full bg-neutral-800 relative overflow-hidden">
                <div class="bg-gradient opacity-0 group-hover:opacity-100 w-full h-full absolute transition-all duration-300 z-10"></div>
                <div class="w-full h-full p-10 pb-0 gap-2 flex flex-col bg-neutral-800 bg-transparent rounded-2xl z-20 absolute">
                    <div class="flex justify-between">
                        <h1 class="text-2xl">{title}</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:translate-x-3 transition-all duration-300" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 12l14 0" />
                            <path d="M13 18l6 -6" />
                            <path d="M13 6l6 6" />
                        </svg>
                    </div>
                    <p class="text-sm text-neutral-400"><span class="text-neutral-300">{subtitle}</span> -- {description}</p>
                    <div class="w-full h-full hidden min-[400px]:flex justify-center relative">
                        <img {src} class="h-5/6 translate-y-8 group-hover:translate-y-0 transition-all duration-300 absolute bottom-0" alt="alt"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .bg-border-gradient {
        background: radial-gradient(circle at top center, rgb(160, 160, 160) 0%, rgb(38, 38, 38) 50%);
    }

    .bg-gradient {
        background: radial-gradient(circle at top center, rgb(8, 51, 68) 0%, rgb(38, 38, 38) 120%);
    }
</style>