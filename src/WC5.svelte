<svelte:options tag="my-wc-5" />

<script>
  let content;

  setTimeout(() => {
    document.getElementById("new-home").appendChild(content);
  }, 3000)
</script>

<div style="border: 1px solid red;">
  <h1>YO</h1>
  <div bind:this={content}>
    <slot />
  </div>
</div>
