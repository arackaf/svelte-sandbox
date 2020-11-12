<script>
  import Overlay from "./Overlay.svelte";

  import modalState from "./modalState";
  import ModalInternal from "./ModalInternal.svelte";
</script>

{#each $modalState.modals as node}
  <Overlay>
  </Overlay>
  <ModalInternal {node} />
{/each}
