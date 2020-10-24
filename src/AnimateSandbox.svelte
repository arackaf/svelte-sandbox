<script>
  import { spring } from "svelte/motion";

  let height = 0;
  let open = false;

  const openSpringConfig = {
    stiffness: 0.5,
    damping: 0.35,
  };
  const closeSpringConfig = {
    stiffness: 0.4,
    damping: 1,
  };

  let heightSpring = spring(-30, {});

  $: heightSpring.set(open ? height : -30);
  $: Object.assign(heightSpring, open ? openSpringConfig : closeSpringConfig);

  let arr = [];
  $: arr.push($heightSpring);
  $: console.log($heightSpring);

  window.log = () => console.log(arr.join(", "))


</script>

<button on:click={() => (open = !open)}>Toggle</button>

<div style={`margin-left: 80px; background-color: pink; width: 300px; height: 30px; transform: translate3d(0px, ${$heightSpring}px, 0px);`} />
