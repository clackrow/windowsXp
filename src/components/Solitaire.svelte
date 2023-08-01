<script lang="ts">
    import taskbar_texture from "$lib/assets/taskbar.png"
    import close_icon from "$lib/assets/close.png"
    import maximize_icon from "$lib/assets/maximize.png"
    import minimize_icon from "$lib/assets/minimize.png"
    import { drag_window } from "$lib/assets/drag_function";
    import { solitaire_open } from "../stores/appStates";
</script>


{#if $solitaire_open}
    <div class="solitaire" use:drag_window>
        <div class="top-bar">
            <div class="window-buttons">
                <input type="image" src={minimize_icon} alt="" class="wd-button">
                <input type="image" src={maximize_icon} alt="" class="wd-button">
                <input type="image" src={close_icon} alt="" class="wd-button" on:click={() => $solitaire_open=false}>
            </div>
            <img src={taskbar_texture} alt="" class="texture" draggable="false">
        </div>
        <iframe src="https://lrusso.github.io/Spider/Spider.htm" frameborder="0" title="solitaire" class="game"></iframe>
        <div class="bottom-bar">
            Credits: <a href="https://github.com/lrusso/Spider" target="_blank">Leonardo Russo</a>
        </div>
    </div>
{/if}

<style>
    .solitaire {
        position: absolute;
        top: 0px;
        width: 60vw;
        border: 2px solid blue;
        border-top: 0px;
        margin-left: 300px;
    }
    .top-bar {
        height: 30px;
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
        width: 100%;
        height: 60vh;
    }
    .bottom-bar {
        background-color: white;
        color: gray;
        padding: 5px;
        margin-top: -5px;
        text-align: right;
    }
    a {
        text-decoration: none;
        color: gray;
    }
</style>