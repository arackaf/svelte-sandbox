<svelte:options tag="my-wc-4" />

<script>
  import { onMount, tick } from "svelte"
  import { slotRedirect } from "./slotUtils";
  let rootEl;

  let color = "pink";
  let size = "fat";
  onMount(() => {
    tick().then(() => {
      let host = rootEl.parentNode.host;
      if (host.getAttribute("foo") == 12) {
        color = "black";
        size = "small";
      }
    });
  })

</script>



<div bind:this={rootEl} style="border: 1px solid blue; background-color: {color}; width: {size == "small" ? 50 : 500}px; height: 50px"> 
</div>

