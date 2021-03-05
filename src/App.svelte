<svelte:options tag="my-element" />


<div class="root">
  <h1 class="x">Hi there BEFORE SLOT</h1>

</div>

<style>
  :host > * {
    color: purple;
  }

  .x {
    color: green;
  }
</style>
