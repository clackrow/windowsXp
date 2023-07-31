<script lang="ts">
    import taskbar_texture from "$lib/assets/taskbar.png"
    import startmenu_texture from "$lib/assets/startmenu.png"
    import Startmenu from "./Startmenu.svelte";

    let show_start_menu:Boolean = false
</script>

{#if show_start_menu}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="backdrop" on:click={() => show_start_menu = !show_start_menu}></div>
    <Startmenu/>
{/if}
<div class="taskbar">
    <img src={taskbar_texture} alt="" class="texture">
    <input type="image" src={startmenu_texture} alt="" class="startmenu-texture" on:click={() => show_start_menu = !show_start_menu}>
</div>


<style>
    .taskbar {
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }

    .texture {
        position: absolute;
        width: 100vw;
        height: 3em;
        bottom: 0px;
    }
    .startmenu-texture {
        position: absolute;
        bottom: 0px;
        height: 3.7em;
    }
    .backdrop {
        position: absolute;
        inset: 0 0 0 0;
    }
</style>