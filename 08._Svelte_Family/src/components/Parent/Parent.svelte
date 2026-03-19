<script>
    import Child from "../Child/Child.svelte";

    let { name, children } = $props();


    function handleShowLove(name) {
        console.log(`${name} loves you`);
    }

    let cookieJar = $state(['🍪', '🍪', '🍪', '🍪']);

    let drinkPantry = $state(['🥃', '🥃', '🥃', '🥃'])


    function handleEatCookie() {
        cookieJar.pop();
    }

</script>

{#each drinkPantry as drink}
    <p>{drink}</p>
{/each}

{#each cookieJar as cookie}
    <span>{cookie}</span>
{/each}

<h1>My name is {name}.</h1>

{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie} drinkPantry={drinkPantry} />
{/each}