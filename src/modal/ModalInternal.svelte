<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quadOut as fn } from "svelte/easing";

  let root;
  export let node;

  onMount(() => {
    root.appendChild(node);
  });

  function modalIn() {
    return {
      duration: 250,
      css: t => {
        const eased = fn(t);

        return `
          transform: translate3d(0px, ${(1 - eased) * -30}px, 0px);
          opacity: ${t};
        `;
      },
    };
  }

  function modalOut() {
    return {
      duration: 200,
      css: t => {
        const eased = fn(t);
        console.log((1 - eased) * 30)

        return `
          transform: translate3d(0px, ${(1 - eased) * 30}px, 0px);
          opacity: ${t};
        `;
      },
    };
  }
</script>

<div in:modalIn out:modalOut bind:this={root}>
  <slot />
</div>
