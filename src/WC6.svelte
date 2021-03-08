<svelte:options tag="my-wc-6" />

<script>
  import { setContext } from "svelte";
  setContext("context", {});

  console.log("6 created");
</script>

<div style="border: 1px solid pink;">
  <slot />
</div>
