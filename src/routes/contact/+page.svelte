<script>
	import OnMount from "$lib/components/OnMount.svelte";
	import { fly } from "svelte/transition";
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact Yousif Abdulhussein." />
</svelte:head>

<OnMount>
    <div in:fly={{ y: 200, duration: 1300 }} class="w-full h-full gap-4 flex flex-col justify-center items-center">
        <h1 class="text-4xl font-bold w-1/2 text-center">Get In Touch</h1>
        <p class="px-6 sm:p-0 w-full sm:w-1/2 text-center text-xl">I’m always looking for any new and interesting opportunities. My inbox is always open if you want to email me for whatever reason, even if it's to just say hi. I’ll try my best to get back to you as soon as possible!</p>
        <div class="gap-4 md:gap-8 flex flex-col-reverse md:flex-row items-center justify-center">
            <a href="MAILTO:abdulhusseinyousifh@gmail.com" class="border-[1px] p-2 text-xl text-cyan-500 font-light border-cyan-500 hover:bg-cyan-950 rounded-md transition-all duration-300">
                Say Hello 👋
            </a>
            <a href="https://drive.google.com/file/d/1aD8h84FPD4PKa5ArJmH05RS9hhX_iX6s/view?usp=sharing" target="_blank" class="text-cyan-500 text-xl font-light">Checkout my resume.</a>
        </div>
    </div>
</OnMount>