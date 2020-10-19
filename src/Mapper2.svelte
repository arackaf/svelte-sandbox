<script>
  import MapperItem from "./MapperItem.svelte";


  export let count = 0;
</script>

{#each Array.from({ length: count }, (x, i) => i + 1) as x}
  <MapperItem let:hovering={hovering} x={x}>
    <slot slot="content" name="content" hovering={hovering} x={x}></slot>
  </MapperItem>
{/each}
