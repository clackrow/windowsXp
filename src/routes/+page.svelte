<script>
    import wallpaper from "$lib/assets/desktop.jpg"
    import Taskbar from "$lib/components/Taskbar.svelte";
	import Applications from "$lib/components/Applications.svelte";
</script>

<img src={wallpaper} alt="" class="wallpaper">
<Applications/>
<Taskbar/>

<style>
    :global(body) {
        margin: 0px;
        padding: 0px;
        overflow-y: hidden;
        overflow-y: hidden;
    }
    .wallpaper {
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }

    
</style>