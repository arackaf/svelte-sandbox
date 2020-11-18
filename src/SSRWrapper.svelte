<script>
  const { setContext } = require("svelte");

  export let cachePrimer;
  setContext("__graphql__", cachePrimer);

  export let Component = null;
</script>

<svelte:component this={Component} />
