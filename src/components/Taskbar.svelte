<script lang="ts">
    import taskbar_texture from "$lib/assets/taskbar.png"
    import internet_icon from "$lib/assets/icons/138.ico"
    import startmenu_texture from "$lib/assets/startmenu.png"
    import Startmenu from "./Startmenu.svelte";

    let show_start_menu:Boolean = false
    let hour = new Date()
    setInterval(() => {
        hour = new Date()
    }, 1000)
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
    <div class="clock">
        <img src={internet_icon} alt="" class="element">
        <span class="element">{hour.toLocaleTimeString()}</span>
    </div>
</div>


<style>
    .taskbar {
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        height: 3em;
        display: flex;
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
        height: 3.654em;
    }
    .backdrop {
        position: absolute;
        inset: 0 0 0 0;
    }
    .clock {
        position: absolute;
        color: white;
        text-shadow: 1px 1px 0 black;
        bottom: 0px;
        right: 0px;
        top: 0px;
        width: 200px;
        padding: 15px;
        justify-content: right;
        display: flex;
    }
    .element {
        margin-right: 10px;
    }
</style>