<svelte:options tag="my-element" />

<script>
  import { onMount, tick } from "svelte";

  let rootEl;

  onMount(() => {
    let observer;
    tick().then(() => {
      let host = rootEl.parentNode.host;
      let val = host.getAttribute("val");
      let val2 = host.getAttribute("my-val");

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

<div bind:this={rootEl} class="root">
  <h1>Hi there BEFORE SLOT</h1>
  <slot />
  <h1>Hi there AFTER SLOT</h1>
</div>

<style type="scss">
  .root {
    h1 {
      color: rgb(241, 200, 183);
    }
  }
</style>
