<script>
  let { import: loader, ...rest } = $$props;

</script>

{#await loader()}
  <slot name="loading"><span>Generic loading message</span></slot>
{:then { default: Component }}
  <svelte:component this={Component} {...rest} />
{:catch}
  <slot name="error">Generic error message</slot>
{/await}


