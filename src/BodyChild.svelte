<script>
  import { onDestroy } from "svelte";

  let parentNode;
  let node;
  function moveIt(n) {
    parentNode = n.parentNode;
    node = n;

    parentNode.removeChild(node);
    document.body.appendChild(node);
  }

  onDestroy(() => {
    document.body.removeChild(node);
  });
</script>

<div>
  <div use:moveIt>
    <slot />
  </div>
</div>

