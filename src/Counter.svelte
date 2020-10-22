<script>
  export let initialValue = 0;
  let value = initialValue;
</script>

<button on:click={() => value++}>Inc</button>
Value is: {value}
<button on:click={() => value--}>Dec</button>