<svelte:options tag="my-wc" />

<script>
  import { onMount, tick } from "svelte";

  let s;

  onMount(() => {
    console.log("MOUNT B")

    // return (() => {
    //   console.log("DISCONNECT B");
    // })
  });
</script>

<h1>Hello</h1>