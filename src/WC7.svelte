<svelte:options tag="my-wc-7" />

<script>
  import { getContext, onMount } from "svelte";
  let contextObject = getContext("context");

  console.log("7 created", typeof contextObject);

  export let active = false;

  $: {
    let isActive = active;
    console.log("active changed", typeof getContext("context"));
  }

  onMount(() => {
    //getContext("context")
    //console.log("on mount", typeof getContext("context"));
  })
</script>

<div style="border: 1px solid red;">Seven</div>
