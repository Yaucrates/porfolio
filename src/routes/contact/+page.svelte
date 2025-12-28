<script>
	import OnMount from "$lib/components/OnMount.svelte";
	import { fly } from "svelte/transition";
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact Yousif Abdulhussein." />
</svelte:head>

<OnMount>
    <div class="max-w-4xl mx-auto px-8 pt-32 pb-24">
        <div in:fly={{ y: 200, duration: 1300 }} class="flex flex-col gap-12">
            <!-- Header Section -->
            <div class="space-y-6">
                <div class="flex items-center gap-4">
                    <div class="text-3xl flex gap-3">
                        <h1 class="font-bold text-neutral-200">Get In Touch</h1>
                    </div>
                    <hr class="flex-1 border-[1px] border-neutral-700"/>
                </div>

                <p class="text-lg text-neutral-400 max-w-2xl leading-relaxed">
                    I'm always looking for new and interesting opportunities. My inbox is always open
                    if you want to email me for whatever reason, even if it's just to say hi. I'll try
                    my best to get back to you as soon as possible!
                </p>
            </div>

            <!-- Contact Cards Section -->
            <div class="grid md:grid-cols-2 gap-6">
                <!-- Email Card -->
                <a
                    href="MAILTO:abdulhusseinyousifh@gmail.com"
                    class="group relative overflow-hidden border border-neutral-800 bg-neutral-900/50 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                    <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="relative z-10 flex flex-col gap-4">
                        <div class="text-4xl">✉️</div>
                        <div>
                            <h2 class="text-xl font-semibold text-neutral-200 mb-2">Send an Email</h2>
                            <p class="text-neutral-400 text-sm mb-4">Drop me a message and I'll get back to you soon</p>
                            <div class="flex items-center gap-2 text-cyan-500 group-hover:gap-3 transition-all duration-300">
                                <span>Say Hello</span>
                                <span class="text-lg">→</span>
                            </div>
                        </div>
                    </div>
                </a>

                <!-- Resume Card -->
                <a
                    href="https://drive.google.com/file/d/1VrnV95pz4pYFHU2YXCdbPAfF3l7y1ifd/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group relative overflow-hidden border border-neutral-800 bg-neutral-900/50 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                    <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="relative z-10 flex flex-col gap-4">
                        <div class="text-4xl">📄</div>
                        <div>
                            <h2 class="text-xl font-semibold text-neutral-200 mb-2">View Resume</h2>
                            <p class="text-neutral-400 text-sm mb-4">Check out my experience and qualifications</p>
                            <div class="flex items-center gap-2 text-cyan-500 group-hover:gap-3 transition-all duration-300">
                                <span>View PDF</span>
                                <span class="text-lg">→</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Additional Contact Info -->
            <div class="mt-4 p-6 border border-neutral-800 bg-neutral-900/30 rounded-lg">
                <p class="text-neutral-400 text-center">
                    Or connect with me on <a href="https://www.linkedin.com/in/yousif-abdulhussein-23400a203/" target="_blank" rel="noopener noreferrer" class="text-cyan-500 hover:text-cyan-400 underline decoration-dashed decoration-1 transition-colors duration-300">LinkedIn</a> or <a href="https://github.com/Yaucrates" target="_blank" rel="noopener noreferrer" class="text-cyan-500 hover:text-cyan-400 underline decoration-dashed decoration-1 transition-colors duration-300">GitHub</a>
                </p>
            </div>
        </div>
    </div>
</OnMount>