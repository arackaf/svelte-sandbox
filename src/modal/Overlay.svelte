<script>
  import { expoOut, expoIn, sineOut, cubicIn, quadIn } from "svelte/easing";

  import { fade } from "svelte/transition";
  import ModalInternal from "./ModalInternal.svelte";
  import modalState from "./modalState";

  import { springIn, springOut, springFrames } from "svelte-helpers/animation";

  const outSpring = { stiffness: 0.4, damping: 0.9, precision: 0.5 };
  const { tickToValue: modalSpringOut, duration: springOutDuration } = springOut(0, 90, outSpring);

  function globalClick(evt) {}


  function overlayOut(){
    return {
      duration: 350,
      css: t => {
        //return "";
        const eased = expoIn(t);

        // return `
        //   background-color: rgba(0, 0, 0, ${(1 - t)});
        // `;
        return `
          background-color: rgba(0, 0, 0, ${eased * 0.33});
          /*border-color: rgba(1, 0, 0, ${t * 0.33});*/
        `;
      },
    };
  }
</script>

<svelte:window on:click={globalClick} />

<!-- out:fade={{ duration: 200, easing: expoIn }} -->
<!-- out:overlayOut -->

<div in:fade={{ duration: 250, easing: sineOut }} out:overlayOut class="svelte-modal-overlay">
</div>
