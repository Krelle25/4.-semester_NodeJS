<script>
    import { on } from "svelte/events";
    import Child from "../Child/Child.svelte";

                            // propagates 
    let { name, children } = $props();

    function handleShowLove(name) {
        console.log(`${name} loves you`);
    }

    let cookieJar = $state([ '🍪', '🍪', '🍪', '🍪', '🍪']);

    let drinkPantry = $state(['🍹', '🍹', '🍹', '🍹', '🍹'])

    /* Assignment

    Create a cookie jar in the parent
    a child should be able to take a cookie
    which should remove the cookie from the jar
    use the correct on... and handle ..convention
    */ 

    function handleEatCookie() {
        cookieJar.pop();
        console.log(`${name} ate a cookie`);
    }
</script>


<h1>My name is { name }.</h1>

{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie} drinkPantry={drinkPantry}/>
{/each}

{#each cookieJar as cookie}
    <span>{cookie}</span>
{/each}

{#each drinkPantry as drink}
    <span>{drink}</span>
{/each}