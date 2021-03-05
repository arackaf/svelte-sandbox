<svelte:options tag="wc-scrollable" />

<script>
  function injectWcStyles(node, stylesImport) {
    const sd = node.parentNode.host.shadowRoot;
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(stylesImport.toString()));

    sd.appendChild(style);
  }

  const styles = "::slotted(input) { background-color: purple; }"

</script>

<h1 use:injectWcStyles={styles}>Feed me an input</h1>
<slot></slot>
