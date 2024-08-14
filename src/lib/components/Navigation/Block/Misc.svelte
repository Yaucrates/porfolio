<div class="flex flex-col gap-2">
    <h2 class="text-sm text-neutral-500">MISC</h2>
    <a href="https://www.ewb-usa.org/" target="_blank" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">Donate to Charity</a>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="w-fit text-sm text-neutral-400 cursor-not-allowed glitch">Don't Click</a>
    <a href="/credits" class="w-fit text-sm text-neutral-400 hover:text-neutral-500 transition-all duration-300">Credits</a>
</div>

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