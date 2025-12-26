<script lang="ts">
    import { navState } from "$lib/components/navigation/nav-state.svelte";
    import OnMount from "$lib/components/OnMount.svelte";
    import { fly } from "svelte/transition";

    $effect(() => {
        navState.sections = [
            { id: "overview", label: "Overview" },
            { id: "challenge", label: "The Challenge" },
            { id: "solution", label: "The Solution" },
            { id: "execution", label: "Execution" },
            { id: "impact", label: "Impact" }
        ];
    });
</script>

<OnMount>
    <div in:fly={{ y: 200, duration: 1300 }} class="text-[#e5e5e5] min-h-screen pt-44 pb-24">
        <div class="w-full aspect-square absolute top-0 gradient-bg"></div>
        <!-- Hero Section -->
        <section id="overview" class="max-w-6xl mx-auto px-6">
            <header class="text-center mb-16">
                <h1 class="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4">Impart Education</h1>
                <p class="text-neutral-500 text-lg">Impart — 2025</p>
            </header>
        </section>

        <!-- Main Showcase -->
        <section id="showcase" class="max-w-6xl mx-auto pb-24 px-6 relative">
            <!-- Browser Window Frame -->
            <div class="relative mx-auto w-full aspect-[16/10] border border-neutral-800 rounded-[40px] bg-neutral-900/20 backdrop-blur-sm p-4 shadow-2xl overflow-hidden">

                <!-- Browser Chrome -->
                <div class="w-full h-full bg-neutral-850 rounded-xl shadow-2xl overflow-hidden flex flex-col border border-neutral-800">

                    <!-- Toolbar -->
                    <div class="h-10 bg-neutral-850 flex items-center px-4 gap-4 border-b border-neutral-800">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div class="w-3 h-3 rounded-full bg-[#28c940]"></div>
                        </div>
                        <div class="flex-1 max-w-xl bg-[#171717] h-6 rounded-md border border-neutral-800 flex items-center px-3 gap-2">
                            <div class="w-2 h-2 rounded-full border border-neutral-500"></div>
                            <div class="h-2 w-32 bg-neutral-700 rounded-full"></div>
                        </div>
                    </div>

                    <!-- Web Content -->
                    <div class="flex-1 bg-[#0c0c0c] relative flex flex-col items-center pt-12 overflow-hidden">

                        <!-- Impart Nav -->
                        <nav class="absolute top-6 left-10 flex items-center gap-6 z-10">
                            <div class="flex items-center gap-2 font-bold tracking-tighter text-xl">
                                <span class="text-cyan-500">|</span>IMPART
                            </div>
                            <span class="text-neutral-400 text-sm font-medium border-l border-neutral-700 pl-6">Learning Platform</span>
                        </nav>

                        <!-- Main Content -->
                        <div class="text-center max-w-2xl z-10 px-6">
                            <h2 class="text-4xl font-bold my-8">Empowering students through interactive learning</h2>
                            <p class="text-neutral-400 text-sm leading-relaxed mb-8 px-4 md:px-10">
                                A comprehensive learning platform designed to make education accessible, engaging, and personalized for students of all backgrounds.
                            </p>

                            <button class="px-8 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] rounded-full font-bold text-sm flex items-center gap-2 mx-auto hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                                Explore the Platform
                                <span class="text-lg">→</span>
                            </button>

                            <p class="mt-4 text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                                Available on Web, iOS, and Android<br/>
                                Trusted by educators and students worldwide
                            </p>
                        </div>

                        <!-- Education Illustration -->
                        <div class="absolute left-1/4 top-1/2 -translate-y-1/2 opacity-30 grayscale hidden lg:block">
                            <div class="text-6xl rotate-12">📚</div>
                        </div>

                        <!-- Platform Preview Image -->
                        <div class="mt-auto w-[65%] max-w-lg mb-[-10%] pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10">
                            <div class="w-full aspect-video bg-neutral-800/50 border border-neutral-700 rounded-lg flex items-center justify-center text-neutral-600 text-sm">
                                [Platform Screenshot/Mockup]
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- LEFT FLOATING CARD -->
            <div class="hidden md:block absolute -left-10 top-1/2 -translate-y-1/2 w-64 bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-2xl p-5 shadow-lg shadow-neutral-700/50 z-20">
                <div class="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold mb-4">1</div>
                <p class="text-sm font-medium mb-4 text-neutral-200">
                    Personalized Learning Paths
                </p>

                <div class="bg-[#171717] rounded-xl p-4 border border-neutral-800 mb-4">
                    <div class="w-full aspect-video border-2 border-dashed border-neutral-800 rounded relative flex items-center justify-center text-xs text-neutral-600">
                        [ Learning Path UI ]
                    </div>
                </div>

                <p class="text-[10px] text-neutral-400 leading-tight italic">
                    AI-powered recommendations adapt to each student's learning style and pace.
                </p>
            </div>

            <!-- RIGHT FLOATING CARD -->
            <div class="hidden md:block absolute -right-10 bottom-10 w-80 bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-2xl p-5 shadow-lg shadow-neutral-700/50 z-20">
                <div class="flex justify-between items-start mb-4">
                    <div class="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                        Interactive Learning Features
                    </div>
                    <button class="text-neutral-500 hover:text-white transition-colors duration-300">×</button>
                </div>

                <h4 class="text-sm font-bold mb-2 text-white">Real-time Progress Tracking</h4>
                <p class="text-[11px] text-neutral-400 mb-4 leading-relaxed">
                    Students can monitor their progress with instant feedback, detailed analytics, and milestone celebrations.
                </p>

                <div class="bg-[#171717] rounded-xl p-4 border border-neutral-800 aspect-video relative flex items-center justify-center mb-4">
                    <div class="w-full h-full flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full border-2 border-cyan-500 animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.5)] flex items-center justify-center">
                            <span class="text-[10px] text-cyan-400 font-bold">85%</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center">
                    <button class="text-[10px] text-cyan-400 underline decoration-cyan-400/30 underline-offset-4 hover:text-cyan-300 transition-colors duration-300">Learn More</button>
                    <div class="flex items-center gap-4">
                        <div class="flex gap-1.5">
                            <div class="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                            <div class="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
                        </div>
                        <button class="px-4 py-1.5 bg-cyan-500 hover:bg-cyan-600 rounded text-[11px] font-bold transition-all duration-300">Next</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Project Details -->
        <section class="max-w-6xl mx-auto px-6 pb-24">
            <div class="grid md:grid-cols-2 gap-12 border-b border-neutral-900 pb-16">
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-6 font-bold">My Role</h3>
                    <p class="text-sm leading-relaxed mb-8">
                        <span class="text-white font-bold">Product Designer</span> — Impart Education Team
                    </p>
                    <p class="text-xs text-neutral-400 leading-relaxed mb-8">
                        User research, learning experience design, prototyping, accessibility, usability testing
                    </p>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-6 font-bold">Tools</h3>
                    <p class="text-xs text-neutral-400 leading-relaxed">
                        Figma, Adobe Creative Suite, User Testing Platforms, Analytics Tools
                    </p>
                </div>
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-6 font-bold">Overview</h3>
                    <p class="text-sm leading-relaxed text-neutral-300">
                        Impart Education is an innovative EdTech platform designed to transform how students engage with learning materials. Our mission was to create an accessible, personalized learning experience that adapts to each student's unique needs.
                    </p>
                    <p class="text-sm leading-relaxed text-neutral-300 mt-4">
                        I led the product design for the core learning platform, focusing on creating intuitive interfaces that promote engagement while maintaining accessibility standards for diverse learners.
                    </p>
                </div>
            </div>
        </section>

        <!-- Challenge Section -->
        <section id="challenge" class="max-w-6xl mx-auto py-24 px-6">
            <div class="bg-neutral-900 border border-neutral-800 rounded-3xl p-12">
                <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-8 font-bold">The Challenge</h3>
                <h2 class="text-3xl font-medium text-white mb-8">Making quality education accessible and engaging for all students.</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <p class="text-neutral-400 text-sm leading-relaxed">
                        Traditional learning platforms often fail to address diverse learning needs, creating barriers for students with different backgrounds and learning styles. We needed to design an experience that was both engaging and inclusive, while providing meaningful feedback to support student growth.
                    </p>
                    <div class="flex flex-col gap-3">
                        <div class="bg-neutral-850 p-4 rounded-lg flex items-center gap-4">
                            <span class="text-xl">🎓</span>
                            <div class="text-[11px] uppercase tracking-wider font-bold text-neutral-200">Maintaining student engagement over time</div>
                        </div>
                        <div class="bg-neutral-850 p-4 rounded-lg flex items-center gap-4">
                            <span class="text-xl">♿</span>
                            <div class="text-[11px] uppercase tracking-wider font-bold text-neutral-200">Ensuring accessibility for diverse learners</div>
                        </div>
                        <div class="bg-neutral-850 p-4 rounded-lg flex items-center gap-4">
                            <span class="text-xl">📊</span>
                            <div class="text-[11px] uppercase tracking-wider font-bold text-neutral-200">Measuring and improving learning outcomes</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Solution Section -->
        <section id="solution" class="max-w-6xl mx-auto py-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-8 font-bold">The Solution</h3>
            <h2 class="text-4xl font-medium text-white mb-6">An adaptive, student-centered learning platform.</h2>
            <p class="text-neutral-400 max-w-2xl mb-12">
                We created a comprehensive learning ecosystem that combines personalized content delivery, interactive assessments, and real-time progress tracking to create an engaging educational experience for every student.
            </p>

            <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-neutral-900 p-6 rounded border-l-4 border-neutral-700">
                    <h4 class="text-sm font-bold text-white mb-2">Interactive Learning Modules</h4>
                    <p class="text-xs text-neutral-400 leading-relaxed">
                        Engaging multimedia content with quizzes, interactive exercises, and hands-on activities to reinforce learning.
                    </p>
                </div>
                <div class="bg-neutral-900 p-6 rounded border-l-4 border-cyan-500">
                    <h4 class="text-sm font-bold text-white mb-2">Personalized Learning Paths</h4>
                    <p class="text-xs text-neutral-400 leading-relaxed">
                        AI-powered recommendations that adapt to each student's pace, learning style, and areas needing improvement.
                    </p>
                </div>
                <div class="bg-neutral-900 p-6 rounded border-l-4 border-neutral-700">
                    <h4 class="text-sm font-bold text-white mb-2">Real-time Progress Insights</h4>
                    <p class="text-xs text-neutral-400 leading-relaxed">
                        Comprehensive analytics dashboard showing achievement milestones, strengths, and growth opportunities.
                    </p>
                </div>
            </div>
        </section>

        <!-- Execution Section -->
        <section id="execution" class="max-w-6xl mx-auto py-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-8 font-bold">Execution</h3>
            <h2 class="text-4xl font-medium text-white mb-12">Complete learning journey.</h2>
            <div class="w-full aspect-[2/1] bg-neutral-900 border border-dashed border-neutral-800 rounded-xl flex items-center justify-center text-neutral-600 italic p-8">
                <div class="text-center">
                    <p class="text-sm mb-4">[ User Journey Diagram ]</p>
                    <p class="text-xs text-neutral-500">Sign Up → Onboarding → Course Selection → Interactive Lessons → Practice & Quizzes → Progress Tracking → Mastery & Certification</p>
                </div>
            </div>
        </section>

        <!-- Impact Section -->
        <section id="impact" class="max-w-6xl mx-auto py-24 px-6">
            <h3 class="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-8 font-bold">Impact</h3>
            <h2 class="text-4xl font-medium text-white mb-6">Transforming educational outcomes.</h2>
            <p class="text-neutral-400 max-w-2xl mb-12">
                The Impart Education platform has successfully helped thousands of students achieve their learning goals, with measurable improvements in engagement, comprehension, and overall academic performance across diverse student populations.
            </p>

            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                    <div class="text-5xl font-bold text-cyan-500 mb-2">85%</div>
                    <p class="text-sm text-neutral-400">Course completion rate, significantly above industry average</p>
                </div>
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                    <div class="text-5xl font-bold text-cyan-500 mb-2">2.5x</div>
                    <p class="text-sm text-neutral-400">Increase in student engagement compared to traditional learning methods</p>
                </div>
            </div>

            <div class="mt-12 bg-neutral-900 p-8 rounded-xl border-l-4 border-cyan-500 italic text-sm text-neutral-300">
                "This platform made learning engaging and accessible. I could learn at my own pace and really understand the material instead of just memorizing it."
                <div class="mt-4 text-[10px] not-italic text-neutral-500">— Student</div>
            </div>
        </section>
    </div>
</OnMount>

<style>
    .gradient-bg {
        pointer-events: none;
        background: radial-gradient(ellipse at top, rgba(0, 170, 255, 0.25) 0%, rgba(6, 182, 212, 0) 75%);
    }

    section {
        scroll-margin-top: 2rem;
    }

    h1, h2 {
        letter-spacing: -0.02em;
    }
</style>
