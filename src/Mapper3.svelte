<script>
  import MapperItem2 from "./MapperItem2.svelte";

  export let count = 0;
</script>

{#each Array.from({ length: count }, (x, i) => i + 1) as x}
  <MapperItem2 let:hovering {x}>
    <slot slot="content" name="content" {hovering} {x} />
  </MapperItem2>
{/each}
