<svelte:options tag="my-wc" />

<script>
  import { onMount, tick } from "svelte";
  import { slotChildAdded } from "./slotUtils"


  export let aValue = 12;

  $: console.log({ aValue })

  export const a = () => { /*console.log("OLD A");*/ };
  export function b(){}
  export let c = () => {};
  let btn;
  let counter = 0;
  function inc(){
    counter++;
  }

  let input;
  function slotChildExists(input) {
    input = input;
    input.setAttribute("slot", "slot1")
    setTimeout(() => {
      
    }, 1000);
  }

  $: console.log("input in my slot", input);

  function inputAttributesChanged(attr) {
    console.log("input attributes", attr);
  }

</script>

<button bind:this={btn}>{counter}</button>
<div class="a" style="border: 1px solid blye">
  Slot 1
  <slot name="slot1" use:slotChildAdded={{ onChild: slotChildExists, onAttributesChanged: inputAttributesChanged }}></slot>
</div>
<div class="b" style="border: 1px solid blue">
  Default Slot
  <slot use:slotChildAdded={{ onChild: slotChildExists, onAttributesChanged: inputAttributesChanged }}></slot> 
</div>
<h1>Hello</h1>
<slot name="slot2"></slot>