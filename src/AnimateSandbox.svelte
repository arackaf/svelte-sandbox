<script>
  import { spring, springFrames } from "svelte/motion";

  let height = 180;
  let open = false;

  const openSpringConfig = {
    stiffness: 0.1,
    damping: 0.35,
    precision: 0.01
  };
  const closeSpringConfig = {
    stiffness: 0.4,
    damping: 1,
  };

  let heightSpring = spring(0, {});

  let X = springFrames(-30, 0, { stiffness: 0.1, damping: 0.35, precision: 0.01 });
  let Y = springFrames(-30, 0, { stiffness: 1, damping: 1, precision: 0.01 });

  $: heightSpring.set(open ? height : 0);
  $: Object.assign(heightSpring, open ? openSpringConfig : closeSpringConfig);

  let arr = [];
  //$: arr.push($heightSpring);
  //$: console.log($heightSpring);

  console.log("frames X", X);
  console.log("frames 2", Y);
  console.log("frames", X.join(","));
</script>

<button on:click={() => (open = !open)}>Toggle Height</button>

<div style={`margin-left: 80px; background-color: pink; width: 300px; height: ${$heightSpring}px;`} />
