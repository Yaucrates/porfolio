<script lang="ts">
    import OnMount from "$lib/components/OnMount.svelte";
    import { fly } from "svelte/transition"
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Homepage for Yousif Abdulhussein's Personal Site." />
</svelte:head>

<OnMount>
    <div class="h-full flex justify-center items-center">
        <div class="w-4/5 gap-6 flex flex-col justify-center">
            <h3 in:fly={{ y: 200, duration: 1300 }} class="text-[14px] min-[350px]:text-[4vw] sm:text-2xl text-cyan-500">Hi, my name is</h3>
            <div class="text-[21px] min-[350px]:text-[6vw] md:text-[5.4vw] font-bold">
                <h1 in:fly={{ y: 400, duration: 1300 }} class="text-neutral-300">Yousif Abdulhussein.</h1>
                <h2 in:fly={{ y: 600, duration: 1300 }} class="text-neutral-400">I turn vision into action.</h2>
            </div>
            <p in:fly={{ y: 800, duration: 1300 }} class="sm:w-2/3 text-base sm:text-lg text-neutral-400">I’m a Full Stack Engineer who loves creating exceptional digital products. Currently, I’m diving into the world of indie hacking and am focused on creating software that empowers people to take control of their own education.</p>
        </div>
    </div>
</OnMount>