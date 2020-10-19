<script>
  import "./header.scss";
  import styles from "./header.module.scss";
  const { headerSpan } = styles;

  export let message = "";
</script>

<style>
  h1 {
    font-size: 24px;
  }
</style>

<h1 class={`header ${headerSpan}`}>{message}</h1>

