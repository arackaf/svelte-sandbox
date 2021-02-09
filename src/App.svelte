<svelte:options tag="my-element" />

<script>
  import { onMount, tick } from "svelte";

  let s;
  let rootEl;
  let foo = 12;
  export let x = 15;

  export let func = null;
  export const setFunc = fn => (func = fn);

  $: {
    if (func == null) {
      console.log("FUNC", "NULL");
    } else {
      console.log("FUNC", func());
    }
  }

  $: {
    console.log("X", x);
  }

  onMount(() => {
    let observer;
    tick().then(() => {
      let host = rootEl.parentNode.host;
      let val = host.getAttribute("val");
      let val2 = host.getAttribute("my-val");

      let a = host.querySelector("h2");
      let b = host.querySelector("h3");
      console.log("here", a, b);

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

<div bind:this={rootEl} class="root">
  <h1 class="x">Hi there BEFORE SLOT</h1>
  <slot name="s" />
  <h1>Hi there AFTER SLOT</h1>
  <slot name="s2" />
</div>

<style>
  :host > * {
    color: purple;
  }

  .x {
    color: green;
  }
</style>
