<script context="module">
  export async function preload() {
    console.log("PRELOAD");
  }
</script>

<script>
  import { getContext } from "svelte";

  export let cachePrimer;

  $: str = `<script>var __primedValues = ${JSON.stringify($cachePrimer)}</script` + ">";

  $: {
    console.log("latest", JSON.stringify($cachePrimer));
  }
</script>

<div>{JSON.stringify($cachePrimer)}</div>

<svelte:head>
  {@html str}
</svelte:head>
