<script>
  import { spring } from "svelte/motion";
  import { springFrames } from "svelte-helpers/animation";

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

  //let X = springFrames(-30, 0, { stiffness: 0.1, damping: 0.35, precision: 0.01 });
  //let Y = springFrames(1000, 0, { stiffness: 0.3, damping: .99, precision: 0.01 });
  //let Z = spring

  $: heightSpring.set(open ? height : 0);
  $: Object.assign(heightSpring, open ? openSpringConfig : closeSpringConfig);

  let arr = [];
  //$: arr.push($heightSpring);
  //$: console.log($heightSpring);

  //console.log("frames X", X);
  //console.log("frames 2", Y);
  //console.log("frames", X.join(","));
  console.log(typeof springFrames);
  console.log(1, springFrames(-30, 0, { stiffness: 0.1, damping: 0.35, precision: 0.01 }));
  console.log(2, springFrames(1000, 0, { stiffness: 0.3, damping: 0.99, precision: 0.01 }));
</script>

<button on:click={() => (open = !open)}>Toggle Height</button>

<div style={`margin-left: 80px; background-color: pink; width: 300px; height: ${$heightSpring}px;`} />
