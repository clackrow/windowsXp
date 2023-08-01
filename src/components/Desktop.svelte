<script>
    import my_computer from "$lib/assets/icons/123.ico"
    import garbage from "$lib/assets/icons/680.ico"
    import IE from "$lib/assets/icons/1487.ico"
    import spider from "$lib/assets/spider_solitaire_icon.png"
    import Solitaire from "../components/Solitaire.svelte";
	import { solitaire_open } from "../stores/appStates";

    let open_solitaire = false
</script>


<div class="applications">
    <button class="app">
        <img src={my_computer} alt="">
        <br>
        <span>My Computer</span>
    </button>
    <br>
    <button class="app">
        <img src={garbage} alt="">
        <br>
        <span>Garbage Bin</span>
    </button>
    <br>
    <button class="app">
        <img src={IE} alt="">
        <br>
        <span>Internet</span>
    </button>
    <br>
    <button class="app" on:click={() => $solitaire_open=true}>
        <img src={spider} alt="">
        <br>
        <span>Spider Solitaire</span>
    </button>

    <Solitaire/>
</div>

<style>
    .applications {
        position: absolute;
        inset: 0px 0px 0px 0px;
        padding: 20px;
        align-items: left;
    }
    .app {
        padding: 10px;
        width: 120px;
        text-align: center;
        background-color: transparent;
        border: 0px;
        color: white;
        text-shadow: 2px 1px 0px black;
        cursor: pointer;
    }
    .app img {
        width: 50px;
    }
</style>