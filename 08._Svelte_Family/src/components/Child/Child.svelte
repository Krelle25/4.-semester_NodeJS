<script>
    let { name, familySheep, isGirl, onShowLove, onEatCookie, drinkPantry = $bindable() } = $props();

    import { fridgeMessages } from "../../stores/fridgeStore.js";

    let fridgeMessageInput = $state("");

    function handleSubmitFridgeMessage() {
        const fridgeMessageToCreate = {
            name,
            message: fridgeMessageInput
        };
        // $fridgeMessages.push(fridgeMessageToCreate);
        // fridgeMessages.set($fridgeMessages);

        fridgeMessages.update((fridgeMessageStoreValue) => {
            fridgeMessageStoreValue.push(fridgeMessageToCreate);
            return fridgeMessageStoreValue;
        });

        fridgeMessageInput = "";
    }

</script>



<div
    class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
    <h3>I'm just a child known as {name}</h3>
</div>

<button onclick={() => onShowLove(name)}>Show Love 💕</button>

<button onclick={onEatCookie}>Grab a cookie from the cookie jar</button>

<button onclick={() => drinkPantry.pop()}>Have a drink</button>

<input bind:value={fridgeMessageInput} placeholder="Type your fridge message...">
<button onclick={handleSubmitFridgeMessage}>Write the fridge message</button>



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