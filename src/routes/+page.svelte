<script lang="ts">
    import wallpaper from "$lib/assets/desktop.jpg"
    import Taskbar from "$lib/components/Taskbar.svelte";
	import Applications from "$lib/components/Applications.svelte";
    import boot_screen from "$lib/assets/boot.gif"
    import boot_sound from "$lib/assets/boot_sound.mp3"

    let boot = true
    let boot_start:HTMLAudioElement
</script>

{#if boot}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="boot-screen" on:click={() => {
        boot = false
        boot_start.play()
    }}>
        <span class="welcome-msg"><h1>Cick anywhere to start</h1></span>
        <img src={boot_screen} alt="" class="boot-gif">
    </div>
{/if}
<audio
    src={boot_sound} preload="auto" bind:this={boot_start} controls class="audio">
</audio>
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
    .boot-screen {
        position: absolute;
        inset: 0px 0px 0px 0px;
        z-index: +1;
        height: 100vh;
        background-color: rgb(3, 3, 3);
        text-align: center;
        color: white;
    }

    .boot-gif {
        height: 100%;
    }

    .welcome-msg {
        position: absolute;
        text-align: center;
        left: 0px;
        right: 0px;
        top: 50px;
    }
    .audio {
        position: absolute;
        z-index: -5;
    }
</style>