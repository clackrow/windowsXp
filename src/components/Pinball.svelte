<script lang="ts">

    import { pinball_open } from "../stores/appStates";
    import taskbar_texture from "$lib/assets/taskbar.png"
    import close_icon from "$lib/assets/close.png"
    import maximize_icon from "$lib/assets/maximize.png"
    import minimize_icon from "$lib/assets/minimize.png"
    import { drag_window } from "$lib/assets/drag_function";
	import { onMount } from "svelte";
	import { browser } from "$app/environment";

    function gameFocus(open_state:Boolean) {
        if(!open_state) return
        const wait = setInterval(() => {
            if(!browser) return
            const iframe = document.getElementById("game-frame")
            if(iframe) {
                iframe.focus()
                clearInterval(wait)
            }
        }, 1000)
    }

    $: gameFocus($pinball_open)
</script>



{#if $pinball_open}
    <div class="pinball" use:drag_window>
        <div class="top-bar">
            <div class="window-buttons">
                <input type="image" src={minimize_icon} alt="" class="wd-button">
                <input type="image" src={maximize_icon} alt="" class="wd-button">
                <input type="image" src={close_icon} alt="" class="wd-button" on:click={() => $pinball_open=false}>
            </div>
            <img src={taskbar_texture} alt="" class="texture" draggable="false">
        </div>
        <iframe src="https://alula.github.io/SpaceCadetPinball/" frameborder="0" title="what" class="game" id="game-frame"></iframe>
    </div>
{/if}

<style>
    .pinball {
        position: absolute;
        top: 50px;
        border: 2px solid blue;
        border-top: 0px;
        overflow: hidden;
        width: 585px;
        height: 470px;
        margin-left: 300px;
    }
    .top-bar {
        height: 30px;
        width: 100%;
        position: absolute;
    }
    .texture {
        width: 100%;
        height: 102%;
    }
    .window-buttons {
        position: absolute;
        width: 100%;
        text-align: right;
        height: 30px;
        align-items: center;
        align-content: center;
        justify-content: right;
        display: flex;
    }
    .wd-button {
        height: 25px;
        margin-right: 2px;
    }
    .game {
        width: 620px;
        height: 500px;
        margin-left: -20px;
        overflow: hidden;
    }
</style>