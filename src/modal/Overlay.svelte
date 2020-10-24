<script>
  import { expoOut, sineOut } from "svelte/easing";

  import { fade } from "svelte/transition";
  import ModalInternal from "./ModalInternal.svelte";
  import modalState from "./modalState";

  function globalClick(evt) {}
</script>

<svelte:window on:click={globalClick} />

<div in:fade={{ duration: 250, easing: sineOut }} out:fade={{ duration: 200, easing: expoOut }} class="svelte-modal-overlay">
  <slot />
</div>
