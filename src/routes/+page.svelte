<script lang="ts">
    import wallpaper from "$lib/assets/desktop.jpg"
    import Taskbar from "../components/Taskbar.svelte";
	import Desktop from "../components/Desktop.svelte";
    import Boot from "../components/Boot.svelte";
    

    let show_boot = true

</script>

<Boot show_boot={show_boot}/>
<img src={wallpaper} alt="" class="wallpaper">
<Desktop/>
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