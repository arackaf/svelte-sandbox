<script>
  let hovering = false;
  export let x;

</script>


<div on:mouseenter={() => hovering = true} on:mouseleave={() => hovering = false}>
  <slot name="content" hovering={hovering}></slot>
</div>