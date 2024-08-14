<footer class="md:hidden w-full flex justify-around p-7 border-t-2 border-neutral-800">
    <div class="flex flex-col gap-2">
        <h2 class="text-sm text-neutral-500">OTHER</h2>
        <a href="https://www.linkedin.com/in/yousif-abdulhussein-23400a203/" target="_blank" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">LinkedIn</a>
        <a href="https://www.youtube.com/@yousifabdulhussein" target="_blank" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">YouTube</a>
        <a href="https://www.instagram.com/yousifeeni/?hl=en" target="_blank" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">Instagram</a>
        <a href="https://x.com/yousifeeni" target="_blank" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">Twitter</a>
        <a href="/credits" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">Credits</a>
    </div>

    <div class="flex flex-col gap-2">
        <h2 class="text-sm text-neutral-500">PERSONAL WORK</h2>
        <a href="/courses" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">Courses</a>
        <a href="/blog" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">Blog</a>
    </div>

    <div class="flex flex-col gap-2">
        <h2 class="text-sm text-neutral-500">MISC</h2>
        <a href="https://www.ewb-usa.org/" target="_blank" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">Donate to Charity</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="w-fit text-sm text-neutral-400 cursor-not-allowed glitch">Don't Click</a>
    </div>
</footer>

<style>
    .glitch:hover {
        color: #ffffff;
        animation: glitch 0.2s infinite forwards;
        animation-direction: alternate-reverse;
        position: relative;
        user-select: none;
    }

    .glitch::before:hover {
        content: "Don't Click";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        animation: glitch1 0.1s infinite forwards;
        animation-direction: alternate-reverse;
        text-shadow: none;
    }
    .glitch::after:hover {
        content: "Don't Click";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        animation: glitch2 0.1s infinite forwards;
        animation-direction: alternate-reverse;
        text-shadow: none;
    }

    @keyframes glitch {
        60% {
            text-shadow: 9px 0 #00ffff, -9px 0 #ff01ae;
        }
        80% {
            text-shadow: 0 12px #ff01ae, 0 -12px #00ffff;
        }
        100% {
            text-shadow: 9px 0 #00ffff, -9px 0 #ff01ae;
        }
    }

    @keyframes glitch1 {
        to {
            transform: translate(-30px, -50%);
            opacity: 0;
        }
    }

    @keyframes glitch2 {
        to {
            transform: translate(30px, -50%);
            opacity: 0;
        }
    }
</style>