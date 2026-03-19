<script>
    import Child from "../Child/Child.svelte";

    let { name, children } = $props();

    import { fridgeMessages } from "../../stores/fridgeStore.js";

    function handleShowLove(name) {
        console.log(`${name} loves you`);
    }

    let cookieJar = $state(['🍪', '🍪', '🍪', '🍪']);

    let drinkPantry = $state(['🥃', '🥃', '🥃', '🥃'])


    function handleEatCookie() {
        cookieJar.pop();
    }

</script>

<button onclick={fridgeMessages.wipe}>Wipe Fridge</button>

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