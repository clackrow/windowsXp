<script>
    import taskbar_texture from "$lib/assets/taskbar.png"
    import shutdown_button from "$lib/assets/icons/237.ico"
    import logoff_button from "$lib/assets/icons/338.ico"
    import IE_icon from "$lib/assets/icons/1487.ico"
    import msn_icon from "$lib/assets/icons/839.ico"
    import ms_word from "$lib/assets/ms_word.png"
    import media_player from "$lib/assets/media_player.png"
    import dog_avatar from "$lib/assets/dog_avatar.png"
    import green_arrow from "$lib/assets/green_arrow.png"
    import my_docs from "$lib/assets/icons/796.ico"
    import my_pics from "$lib/assets/icons/832.ico"
    import my_music from "$lib/assets/icons/816.ico"
    import my_computer from "$lib/assets/icons/123.ico"
    import control_panel from "$lib/assets/icons/182.ico"
    import printer from "$lib/assets/icons/869.ico"
    import help from "$lib/assets/icons/198.ico"
    import search from "$lib/assets/icons/190.ico"
    import run from "$lib/assets/icons/210.ico"
	import { about_open } from "../stores/appStates";
</script>

<div class="start-menu">
    <div class="top-bar">
        <div class="user-data">
            <img src={dog_avatar} alt="" class="avatar-img">
            <span style="margin-left: 20px; margin-top: -10px"><h4>Guest</h4></span>
        </div>
        <img src={taskbar_texture} alt="" class="texture" style="border-top-right-radius: 10px;">
    </div>
    <div class="content">
        <div class="side" id="left">
            <div class="left-element">
                <img src={msn_icon} alt="">
                <span style="margin-left: 10px;">MSN</span>
            </div>
            <div class="left-element">
                <img src={IE_icon} alt="">
                <span style="margin-left: 10px;">Internet Explorer</span>
            </div>
            <div class="left-element">
                <img src={ms_word} alt="">
                <span style="margin-left: 10px;">Word</span>
            </div>
            <div class="left-element">
                <img src={media_player} alt="">
                <span style="margin-left: 10px;">Windows Media Player</span>
            </div>
            <div class="all-programs">
                <span><strong>All Programs</strong></span>
                <img src={green_arrow} alt="" style="margin-left: 10px;">
            </div>
        </div>
        <div class="side" id="right">
            <div class="right-element">
                <img src={my_docs} alt="">
                <span style="margin-left: 10px;">My Documents</span>
            </div>
            <div class="right-element">
                <img src={my_pics} alt="">
                <span style="margin-left: 10px;">My Pictures</span>
            </div>
            <div class="right-element">
                <img src={my_music} alt="">
                <span style="margin-left: 10px;">My Music</span>
            </div>
            <div class="right-element">
                <img src={my_computer} alt="">
                <span style="margin-left: 10px;">My Computer</span>
            </div>
            <hr>
            <div class="right-element">
                <img src={control_panel} alt="">
                <span style="margin-left: 10px;">Control Panel</span>
            </div>
            <div class="right-element">
                <img src={printer} alt="">
                <span style="margin-left: 10px;">Printers and Faxes</span>
            </div>
            <hr>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="right-element" on:click={() => $about_open=true}>
                <img src={help} alt="">
                <span style="margin-left: 10px;">About this App</span>
            </div>
            <div class="right-element">
                <img src={search} alt="">
                <span style="margin-left: 10px;">Search</span>
            </div>
            <div class="right-element">
                <img src={run} alt="">
                <span style="margin-left: 10px;">Run...</span>
            </div>
        </div>
    </div>
    <div class="bottom-bar">
        <div class="shutdown-buttons">
            <input type="image" src={logoff_button} alt="" class="sh-element">
            <span class="sh-element">Log Off</span>
            <a href="https://google.com"><input type="image" src={shutdown_button} alt="" class="sh-element"></a>
            <span class="sh-element">Turn <u>O</u>ff Computer</span>
        </div>
        <img src={taskbar_texture} alt="" class="texture">
    </div>
</div>

<style>
    .start-menu {
        position: absolute;
        bottom: 3em;
        left: 0px;
        width: 30vw;
        height: 70vh;
        background-color: white;
        border-top-right-radius: 10px;
        box-sizing: border-box;
        min-width: 340px;
    }

    .content {
        position: absolute;
        top: 4em;
        bottom: 2em;
        width: 100%;
        display: flex;
    }

    .side {
        width: 50%;
        padding: 10px;
    }

    #left {
        background-color: white;
        border-right: 1px solid rgba(0, 0, 255, 0.4);
        box-sizing: border-box;
    }

    #right {
        background-color: rgb(203, 203, 255);
        border-right: 2px solid rgba(0, 0, 255, 0.4);
        box-sizing: border-box;
    }
    .top-bar {
        position: absolute;
        width: 100%;
    }
    
    .texture {
        width: 100%;
        height: 70px;
    }

    .bottom-bar {
        position: absolute;
        width: 100%;
        height: 3em;
        bottom: -1px;
    }


    .shutdown-buttons {
        position: absolute;
        bottom: 0px;
        top: 0px;
        right: 0px;
        padding: 10px;
        text-align: right;
        color: white;
        display: flex;
        align-items: center;
    }
    .sh-element {
        margin-left: 10px;
    }
    .shutdown-buttons input {
        width: 30px;
    }
    span {
        font-weight:lighter;
    }
    .user-data {
        position: absolute;
        left: 0px;
        bottom: 0px;
        top: 0px;
        padding: 20px;
        display: flex;
        color: white;
        align-items: center;
    }
    .avatar-img {
        margin-top: -15px;
        width: 50px;
        height: 50px;
        border: 3px solid white;
        border-radius: 10px;
        box-sizing: border-box;
    }

    .left-element {
        padding: 10px;
        display: flex;
        align-items: center;
        font-weight: lighter;
        color: rgb(49, 49, 49);
    }
    .left-element img {
        width: 40px;
    }
    .left-element:hover {
        cursor: pointer;
        background-color: rgb(185, 185, 255);
    }
    .all-programs {
        position: absolute;
        bottom: 30px;
        width: 40%;
        text-align: center;
        display: flex;
        padding: 5px;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    .all-programs:hover {
        background-color: rgb(185, 185, 255);
        cursor: pointer;
    }
    .right-element {
        display: flex;
        align-items: center;
        padding: 5px;
    }
    .right-element img {
        width: 25px;
    }
    .right-element:hover {
        background-color: rgb(185, 185, 255);
        cursor: pointer;
    }
    hr {
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
</style>