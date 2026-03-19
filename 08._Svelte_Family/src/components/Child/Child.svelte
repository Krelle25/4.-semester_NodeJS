<script>
    let { name, familySheep, isGirl } = $props();


</script>

<div
    class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
    <h3>I'm just a child known as {name}</h3>
</div>

<style>
    div {
        color: white;
    }
    
    .black-sheep {
        background-color: rebeccapurple;
    }

    .grey-sheep {
        background-color: yellowgreen;
    }

    .not-a-sheep {
        background-color: plum;
    }

    .is-girl {
        border: 4px dashed palegoldenrod;
    }

    .is-boy {
        border: 4px solid slateblue;
    }
</style>