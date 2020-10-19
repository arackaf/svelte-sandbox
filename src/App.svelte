<script>
  import Books from "./Books";
  import Lazy from "./Lazy";
  import Mapper from "./Mapper.svelte";
  import Mapper2 from "./Mapper2.svelte";

  let lazyRequested = false;
</script>

<button on:click={() => (lazyRequested = true)}>Gimme lazy content</button>

{#if lazyRequested}
  <Lazy import={() => import('./Header')} message="Hey there">
    <span slot="loading">Loading that header boo</span>
    <span slot="error">Couln't load header sorry</span>
  </Lazy>
{/if}

<Books />

<Mapper count={4} />

<Mapper count={4}>
  <div let:x slot="content" style="color: green">Overridden {x}</div>
</Mapper>

<Mapper2 count={4}>
  <div slot="content" let:x let:hovering style="color: orange;">Overridden: {x} Hovering: {hovering}</div>
</Mapper2>
