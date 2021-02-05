<script>
  import { onMount, tick } from "svelte";

  let s;
  let rootEl;
  let foo = 12;

  onMount(() => {
    let observer;
    tick().then(() => {
      let host = rootEl.parentNode.host;
      let val = host.getAttribute("val");
      let val2 = host.getAttribute("my-val");

      console.log("slot", s);

      console.log("init", { val, val2 });

      let config = { attributes: true, childList: false, subtree: false };
      observer = new MutationObserver(() => {
        let val = host.getAttribute("val");
        let val2 = host.getAttribute("my-val");

        console.log("attr update", { val, val2 });
      });
      observer.observe(host, config);
    });

    return () => {
      observer.disconnect();
    };
  });
</script>

<svelte:options tag="my-element" />

<div bind:this={rootEl} class="root">
  <h1 class="x">Hi there BEFORE SLOT</h1>
  <slot name="s" bind:this={s} />
  <h1>Hi there AFTER SLOT</h1>

</div>

<style>

  :host > * {
    color:purple;
  }

  .x {
    color: green;
  }
</style>
