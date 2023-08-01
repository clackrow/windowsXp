<script lang="ts">
	import { browser } from "$app/environment";
    import boot_screen from "$lib/assets/boot.gif"
    import boot_sound from "$lib/assets/boot_sound.mp3"
    import terminal_gif from "$lib/assets/terminal.gif"
	import { onMount } from "svelte";

    let boot_start:HTMLAudioElement
    export let show_boot:Boolean

    let first_step = true
    let gif_path:string
    onMount(() => {
        gif_path = terminal_gif
        setTimeout(() => {
            first_step = false
        }, 10000)
    })
</script>


{#if show_boot}
    {#if first_step}
        <div class="terminal"><img src={gif_path} alt="" id="terminal-gif"></div>
    {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="boot-screen" on:click={() => {
            show_boot = false
            boot_start.play()
        }}>
            <span class="welcome-msg"><h1>Cick anywhere to start</h1></span>
            <img src={boot_screen} alt="" class="boot-gif">
        </div>
    {/if}
    
{/if}
<audio
    src={boot_sound} preload="auto" bind:this={boot_start} controls class="audio">
</audio>

<style>
    @import url('https://fonts.cdnfonts.com/css/bitwise');
    .terminal {
        position: absolute;
        inset: 0px 0px 0px 0px;
        background-color: black;
        z-index: +1;
    }
    .terminal img {
        width: 100%;
    }
    .boot-screen {
        position: absolute;
        inset: 0px 0px 0px 0px;
        z-index: +1;
        height: 100vh;
        background-color: rgb(3, 3, 3);
        text-align: center;
        color: white;
        font-family: 'Bitwise', sans-serif;
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