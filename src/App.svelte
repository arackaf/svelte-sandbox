<script>

  import Books from "./Books";
  import Lazy from "./Lazy";

  let lazyRequested = false;

</script>

<button on:click={() => lazyRequested = true}>Gimme lazy content</button>

{#if lazyRequested}
  <Lazy import={() => import("./Header")} message="Hey there">
    <span slot="loading">Loading that header boo</span>
    <span slot="error">Couln't load header sorry</span>
  </Lazy>

{/if}

<Books />



