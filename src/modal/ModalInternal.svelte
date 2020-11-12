<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicIn, cubicOut, expoIn, expoOut, quadOut, quadIn, quintIn, quintOut } from "svelte/easing";

  import { springIn, springOut, springFrames } from "svelte-helpers/animation";

  const { tickToValue: modalSpringIn, duration: springInDuration } = springIn(-30, 0, { stiffness: 0.1, damping: 0.35, precision: 0.01 });

  const outSpring = { stiffness: 0.1, damping: 0.5, precision: 0.01 };
  // const outSpring = { stiffness: 0.4, damping: 0.9, precision: 0.5 };
  const { tickToValue: modalSpringOut, duration: springOutDuration } = springOut(0, 30, outSpring);
  //alert(springOutDuration);

  const XXX = springFrames(0, 90, outSpring);

  console.log(springOutDuration);
  console.log(XXX);


  let root;
  export let node;

  onMount(() => {
    root.appendChild(node);
  });

  function modalInRaw() {
    return {
      duration: springInDuration,
      easing: modalSpringIn,
      css: t => {
        return `
          transform: translate3d(0px, ${t}px, 0px);
        `;
      },
    };
  }

  function modalIn() {
    return {
      duration: springInDuration,
      css: t => {
        const transformY = modalSpringIn(t);
        const opacity = expoOut(t);

        return `
          transform: translate3d(0px, ${transformY}px, 0px);
          opacity: ${opacity};
        `;
      },
    };
  }

  //alert(springOutDuration);
  function modalSpringOutTransition() {
    return {
      duration: springOutDuration,
      css: t => {
        const easedTransform = modalSpringOut(t);
        const easedOpacity = quintIn(t);

        console.log(`
          transform: translate3d(0px, ${easedTransform}px, 0px);
          opacity: ${easedOpacity}
        `);

        //(1 - t) * 190
        return `
          transform: translate3d(0px, ${easedTransform}px, 0px);
          opacity: ${easedOpacity}
        `;
      },
    };
  }

  function modalOut() {
    return {
      duration: 200,
      css: t => {
        const easedTransform = cubicIn(t);
        const easedOpacity = quintOut(t);

        return `
          transform: translate3d(0px, ${(1 - easedTransform) * 30}px, 0px);
          /*opacity: ${easedOpacity};*/
        `;
      },
    };
  }
</script>

<style>
  .xxxmodal {
    transform: translate3d(0, -90px, 0);
  }
</style>

<div class="svelte-modal-wrapper">
  <div class="modal" in:modalInRaw out:modalSpringOutTransition bind:this={root}>
    <slot />
  </div>
</div>
