<script lang="ts">
    import { navState } from "$lib/components/navigation/nav-state.svelte";
    import OnMount from "$lib/components/OnMount.svelte";
    import { fly } from "svelte/transition";

    $effect(() => {
        navState.sections = [
            { id: "overview", label: "Overview" },
            { id: "highlights", label: "Highlights" },
            { id: "context", label: "Context" },
            { id: "problem", label: "The Problem" },
            { id: "flow", label: "Update Flow" },
            { id: "visuals", label: "Visual Design" },
            { id: "retrospective", label: "Retrospective" }
        ];
    });
</script>

<OnMount>
    <div in:fly={{ y: 200, duration: 1300 }} class="text-[#e5e5e5] min-h-screen pt-44 pb-24">
        <!-- Hero Section -->
        <section id="overview" class="max-w-6xl mx-auto px-6">
            <header class="text-center mb-16">
                <h1 class="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4">Impart Education</h1>
                <p class="text-neutral-500 text-lg">Educational Platform — 2024</p>

                <div class="mt-12 aspect-video bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c] rounded-3xl border border-neutral-800 flex items-center justify-center overflow-hidden">
                    <div class="text-center">
                        <p class="text-neutral-600 uppercase tracking-widest text-xs mb-4">[ Primary Hero Illustration ]</p>
                        <h2 class="text-2xl font-light">Empowering students through accessible education</h2>
                    </div>
                </div>
            </header>

            <div class="grid md:grid-cols-2 gap-12 border-b border-neutral-900 pb-16">
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-6 font-bold">My Role</h3>
                    <p class="text-sm leading-relaxed mb-8">
                        <span class="text-white font-bold">Full Stack Developer</span> — Frontend Development, Backend Architecture, UI/UX Design, Database Design
                    </p>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-6 font-bold">Technologies</h3>
                    <p class="text-xs text-neutral-400 leading-relaxed">
                        React, Node.js, PostgreSQL, TypeScript, Tailwind CSS, Express.js
                    </p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-6 font-bold">Overview</h3>
                    <p class="text-sm leading-relaxed text-neutral-300">
                        Impart Education is a comprehensive learning platform designed to democratize access to quality education. The platform connects students with resources, courses, and mentors to support their educational journey.
                    </p>
                    <p class="text-sm leading-relaxed text-neutral-300 mt-4">
                        I developed the full-stack application, creating an intuitive interface and robust backend infrastructure to support thousands of students in their learning goals.
                    </p>
                </div>
            </div>
        </section>

        <!-- Highlights -->
        <section id="highlights" class="max-w-6xl mx-auto py-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-8 font-bold">Highlights</h3>
            <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12">
                <div class="aspect-video bg-neutral-850 rounded-lg border border-neutral-800 flex items-center justify-center text-neutral-700">
                    [ Screenshot: Impart Education Platform Dashboard ]
                </div>
            </div>
        </section>

        <!-- Context -->
        <section id="context" class="max-w-6xl mx-auto py-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-8 font-bold">Context</h3>
            <h2 class="text-4xl font-medium text-white mb-6">Making education accessible to everyone.</h2>
            <p class="text-neutral-400 max-w-2xl mb-12">
                Education should be a right, not a privilege. Impart Education was built to bridge the gap between students and quality learning resources, regardless of their background or location.
            </p>

            <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-neutral-900 p-6 rounded border-l-4 border-neutral-700 italic text-sm text-neutral-300">
                    "This platform has transformed how I approach learning."
                    <div class="mt-4 text-[10px] not-italic text-neutral-500">— Student User</div>
                </div>
                <div class="bg-neutral-900 p-6 rounded border-l-4 border-cyan-500 italic text-sm text-neutral-300">
                    "Finally, a platform that truly understands student needs."
                    <div class="mt-4 text-[10px] not-italic text-neutral-500">— Educator</div>
                </div>
                <div class="bg-neutral-900 p-6 rounded border-l-4 border-neutral-700 italic text-sm text-neutral-300">
                    "Impart Education makes quality resources accessible to all."
                    <div class="mt-4 text-[10px] not-italic text-neutral-500">— Education Review</div>
                </div>
            </div>
        </section>

        <!-- The Problem -->
        <section id="problem" class="max-w-6xl mx-auto py-24 px-6">
            <div class="bg-neutral-900 border border-neutral-800 rounded-3xl p-12">
                <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-8 font-bold">The Challenge</h3>
                <h2 class="text-3xl font-medium text-white mb-8">Building a scalable educational ecosystem.</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <p class="text-neutral-400 text-sm leading-relaxed">
                        Creating a platform that could handle diverse learning paths, multiple user roles, and seamless content delivery while maintaining performance and accessibility standards.
                    </p>
                    <div class="flex flex-col gap-3">
                        <div class="bg-neutral-800 p-4 rounded-lg flex items-center gap-4">
                            <span class="text-xl">🎓</span>
                            <div class="text-[11px] uppercase tracking-wider font-bold">Multi-role user system</div>
                        </div>
                        <div class="bg-neutral-800 p-4 rounded-lg flex items-center gap-4">
                            <span class="text-xl">📚</span>
                            <div class="text-[11px] uppercase tracking-wider font-bold">Dynamic content management</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Flow -->
        <section id="flow" class="max-w-6xl mx-auto py-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-8 font-bold">User Journey</h3>
            <h2 class="text-4xl font-medium text-white mb-12">Seamless learning experience.</h2>
            <div class="w-full aspect-[2/1] bg-neutral-900 border border-dashed border-neutral-800 rounded-xl flex items-center justify-center text-neutral-600 italic">
                [ Flow Diagram: Sign Up → Browse Courses → Enroll → Learn → Track Progress ]
            </div>
        </section>
    </div>
</OnMount>

<style>
    section {
        scroll-margin-top: 2rem;
    }

    h1, h2 {
        letter-spacing: -0.02em;
    }
</style>