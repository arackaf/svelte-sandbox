<svelte:options tag="my-wc" />

<script>
  import { onMount, tick } from "svelte";

  let s;

  onMount(() => {
    tick().then(() => {
      let host = s.parentNode.host;
      console.log(host);
    });

    return (() => {
      console.log("DISCONNECT B");
    })
  });
</script>

<slot bind:this={s}></slot>
