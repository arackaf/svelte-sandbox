<script>
  import { onMount, afterUpdate } from "svelte";
  import modalState from "./modalState";
  import "./modalInit"

  let contentNode;
  let currentlyOpen;
  export let open = false;

  onMount(sync);
  afterUpdate(sync);

  function sync() {
    if (!currentlyOpen && open) {
      currentlyOpen = true;
      modalState.update(state => ({ ...state, modals: [...state.modals, contentNode] }));
    } else if (currentlyOpen && !open) {
      currentlyOpen = false;
      modalState.update(state => ({ ...state, modals: state.modals.filter(d => d != contentNode) }));
    }
  }
</script>

<div style="display: none;">
  <div bind:this={contentNode} class="svelte-modal-content">
    <slot />
  </div>
</div>
