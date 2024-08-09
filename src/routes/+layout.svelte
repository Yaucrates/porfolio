<script lang="ts">
    // import type { LayoutData } from './$types';
    import '../app.css'
    import { onNavigate } from '$app/navigation';
	import SideNav from "$lib/components/SideNav/SideNav.svelte";
	import Header from '$lib/components/Header/Header.svelte';
    
    onNavigate((navigation) => {
        if (!document.startViewTransition) return;
	    return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
    
    // export let data: LayoutData;
</script>

<SideNav />
<div class="md:ml-48 h-full flex flex-col">
    <Header />
    <div class="flex-grow">
        <slot />
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        font-family: "Poppins";
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
    }

    @keyframes fade-out {
        to {
            opacity: 0;
        }
    }

    @keyframes slide-from-top {
        from {
            transform: translateY(30px);
        }
    }

    @keyframes slide-to-bottom {
        to {
            transform: translateY(-30px);
        }
    }

    :root::view-transition-old(root) {
        animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-bottom;
    }

    :root::view-transition-new(root) {
        animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-top;
    }
</style>