<script>
    import my_computer from "$lib/assets/icons/123.ico"
    import garbage from "$lib/assets/icons/680.ico"
    import IE from "$lib/assets/icons/1487.ico"
    
</script>


<div class="applications">
    <div class="app">
        <img src={my_computer} alt="">
        <br>
        <span>My Computer</span>
    </div>
    <div class="app">
        <img src={garbage} alt="">
        <br>
        <span>Garbage Bin</span>
    </div>
    <div class="app">
        <img src={IE} alt="">
        <br>
        <span>Internet</span>
    </div>
</div>

<style>
    .applications {
        position: absolute;
        inset: 0px 0px 0px 0px;
        padding: 20px;
        color: white;
        text-shadow: 2px 1px 0px black;
        align-items: left;
    }
    .app {
        padding: 10px;
        width: 100px;
        text-align: center;

    }
</style>