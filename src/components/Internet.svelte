<script lang="ts">
    import taskbar_texture from "$lib/assets/taskbar.png"
    import close_icon from "$lib/assets/close.png"
    import maximize_icon from "$lib/assets/maximize.png"
    import minimize_icon from "$lib/assets/minimize.png"
    import { drag_window } from "$lib/assets/drag_function";
    import { internet_open } from "../stores/appStates";
    import back_button from "$lib/assets/back_button.png"
    import navbar from "$lib/assets/navbar.png"

</script>


{#if $internet_open}
    <div class="internet" use:drag_window>
        <div class="top-bar">
            <div class="window-buttons">
                <input type="image" src={minimize_icon} alt="" class="wd-button">
                <input type="image" src={maximize_icon} alt="" class="wd-button">
                <input type="image" src={close_icon} alt="" class="wd-button" on:click={() => $internet_open=false}>
            </div>
            <img src={taskbar_texture} alt="" class="texture" draggable="false">
        </div>
        <div class="navbar">
            <span><u>F</u>ile</span> <span style="margin-left: 10px;"><u>E</u>dit</span> <span style="margin-left: 10px;"><u>V</u>iew</span> <span style="margin-left: 10px;"><u>F</u>avorites</span> <span style="margin-left: 10px;"><u>T</u>ools</span> <span style="margin-left: 10px;"><u>H</u>elp</span>
            <hr>
            <div class="nav-buttons">
                <button class="backbutton"><img src={back_button} alt=""><span>Back</span></button>
                <img src={navbar} alt="">
            </div>
            <hr>
            <span style="color: gray;">A<u>d</u>dress</span> <input type="text" placeholder="https://www.wikipedia.org">
        </div>
        <iframe src="https://www.wikipedia.org/" title="web-browser" class="web-display"></iframe>
        <div class="bottom-bar">
        </div>
    </div>
{/if}

<style>
    .internet {
        position: absolute;
        top: 0px;
        width: 60vw;
        border: 2px solid blue;
        border-top: 0px;
        margin-left: 300px;
        overflow-x: hidden;
    }
    .top-bar {
        height: 30px;
    }
    .navbar {
        background-color: white;
        padding: 5px;
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
    .web-display {
        width: 100%;
        height: 60vh;
        background-color: white;
    }
    .bottom-bar {
        background-color: white;
        color: gray;
        padding: 5px;
        margin-top: -5px;
        text-align: right;
        height: 15px;
    }
    hr {
        color: rgba(0, 0, 0, 0.181);
    }
    .nav-buttons {
        display: flex;
    }
    .backbutton {
        background-color: transparent;
        border: 0px;
        display: flex;
        align-content: center;
        align-items: center;
    }
    .backbutton:hover {
        cursor: pointer;
        box-sizing: border-box;
    }
    span {
        padding: 5px;
    }
    span:hover {
        background-color: rgba(128, 128, 128, 0.236);
        cursor: pointer;
    }
</style>


