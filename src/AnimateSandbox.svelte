<script>
  import { spring } from "svelte/motion";

  let height = 300;
  let open = false;

  const openSpringConfig = {
    stiffness: 0.1,
    damping: 0.35,
  };
  const closeSpringConfig = {
    stiffness: 0.4,
    damping: 1,
  };

  let heightSpring = spring(0, {});

  $: heightSpring.set(open ? height : 0);
  $: Object.assign(heightSpring, open ? openSpringConfig : closeSpringConfig);
</script>

<button on:click={() => (open = !open)}>Toggle</button>

<div style="background-color: pink; width: 300px; height: {$heightSpring}px" />
