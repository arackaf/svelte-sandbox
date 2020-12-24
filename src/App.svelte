<style type="stylus">
  $foo = red;
  .root {
    h1 {
      color: $foo;
    }
  }
</style>

<svelte:options tag="my-element" />

<div class="root">
  <h1>Hi there</h1>
</div>
