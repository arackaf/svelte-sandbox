<script>
  import { fade } from "svelte/transition";
  import ModalInternal from "./ModalInternal.svelte";
  import modalState from "./modalState";

  function globalClick(evt) {}
</script>

<svelte:window on:click={globalClick} />

{#if $modalState.modals.length}
  <div in:fade="{{ duration: 250 }}" out:fade="{{ duration: 200 }}" class="svelte-modal-overlay">
    {#each $modalState.modals as node}
      <ModalInternal {node} />
    {/each}
  </div>
{/if}
