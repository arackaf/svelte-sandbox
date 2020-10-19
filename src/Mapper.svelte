<script>
  export let count = 0;
</script>

{#each Array.from({ length: count }, (x, i) => i + 1) as x}
  <slot name="content" x={x}><div style="color: purple"> Item number {x} </div></slot>
{/each}
