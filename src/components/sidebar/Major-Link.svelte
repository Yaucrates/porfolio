<script>
    export let href;
    export let name;
</script>

<a {href} class="flex items-center group">
    <svg class="opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 6l6 6l-6 6" />
    </svg>
    <div class="text-lg hover:text-white transition-all duration-300">{name}</div>
</a>