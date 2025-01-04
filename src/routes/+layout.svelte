<script lang="ts">
    import '../app.css'
    import { onNavigate } from '$app/navigation';
    // import SideNav from '$lib/components/navigation/SideNav.svelte';
	// import Header from '$lib/components/navigation/Header.svelte';
	// import Footer from '$lib/components/navigation/Footer.svelte';

    let { children } = $props();
    
    onNavigate((navigation) => {
        if (!document.startViewTransition) return;
	    return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<!-- <SideNav /> -->
<div class="md:ml-48 h-full flex flex-col">
    <!-- <Header /> -->
    <div class="flex-grow">
        {@render children()}
        <!-- <Footer /> -->
    </div>
</div>

<style>
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