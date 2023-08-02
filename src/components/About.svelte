<script lang="ts">
    import taskbar_texture from "$lib/assets/taskbar.png"
    import close_icon from "$lib/assets/close.png"
    import maximize_icon from "$lib/assets/maximize.png"
    import minimize_icon from "$lib/assets/minimize.png"
    import { drag_window } from "$lib/assets/drag_function";
    import { about_open, internet_open } from "../stores/appStates";
    import back_button from "$lib/assets/back_button.png"
    import navbar from "$lib/assets/navbar.png"

</script>


{#if $about_open}
    <div class="internet" use:drag_window>
        <div class="top-bar">
            <div class="window-buttons">
                <input type="image" src={minimize_icon} alt="" class="wd-button">
                <input type="image" src={maximize_icon} alt="" class="wd-button">
                <input type="image" src={close_icon} alt="" class="wd-button" on:click={() => $about_open=false}>
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
        </div>
        <hr>
       <div class="info">
            <h3>This app was developed by <a href="https://github.com/clackrow" target="_blank">Rodrigo Azzolini</a></h3>
            <p>This is just a coding challenge, made in <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>. 
                <br>
                I had lots of fun coding this and I learned a lot in the process.
                <br>
                I really hope you enjoy navigating in this app and through you own memories. I had a massive nostalgia hit building it.
            </p>
            <br>
            <br>
                <h3>Credits for the games included in this app:</h3>
                Solitaire: <a href="https://github.com/lrusso/Spider" target="_blank">Leonardo Russo</a>
                <br>
                Pinball: <a href="https://github.com/alula/SpaceCadetPinball" target="_blank">Alula</a>
            
       </div>
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
        background-color: white;
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
    .info {
        background-color: white;
        padding: 20px;
    }
</style>