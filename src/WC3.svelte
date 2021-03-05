<svelte:options tag="my-wc-2" />

<script>
  import { slotRedirect } from "./slotUtils";
  let rootEl;

</script>

<div style="border: 1px solid blye">
  <hr />
  Slot 1 - input goes here
  <wc-scrollable>
    <slot name="slot1"></slot>
  </wc-scrollable>
  <hr />
</div>
<div>
  Slot 2 - red labels go here
  <slot name="slot2"></slot>
</div>

<div>
  Slot 3 - blue labels go here
  <slot name="slot3"></slot>
</div>

<div>
  Slot 4 - nested labels go here
  <slot name="slot4"></slot>
</div>

<div bind:this={rootEl} style="border: 1px solid blue">
  Default Slot - should redirect stuff
  <slot use:slotRedirect={{ root: () => rootEl, config: { "input": "slot1", "label.red": "slot2", "label.blue": "slot3", ".nest": "slot4" } }}></slot> 
</div>

