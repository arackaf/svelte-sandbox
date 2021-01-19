<script>
  import { onMount } from "svelte";

  let status = "";
  let disabled = false;
  let mounted = false;
  let activated = false;

  onMount(() => {
    mounted = true;
  });

  $: {
    if (mounted && !disabled) {
      activated = true;
      setTimeout(() => {
        activated = false;
      }, 1000);
    }
  }

  $: {
    if (disabled) {
      status = "disabled";
    } else if (activated) {
      status = "activated";
    } else {
      status = "idle";
    }
  }

  function activate() {
    activated = true;
    setTimeout(() => {
      activated = false;
    }, 1000);
  }
</script>

<button on:click={() => (disabled = !disabled)}> Toggle </button>

<div>
  status = {status}
</div>

<div>
  disbled = {disabled}
</div>
