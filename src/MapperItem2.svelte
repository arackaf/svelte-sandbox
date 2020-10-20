<script>
  let hovering = false;

  function onload(domNode) {
    if (domNode.content.childElementCount > 1) {
      throw "Only one child, asshole";
    }
    if (!domNode.content.childElementCount) {
      throw "You need a child, asshole";
    }
    const content = domNode.content.firstElementChild;

    domNode.content.removeChild(content);
    domNode.parentNode.appendChild(content);

    const onEnter = () => (hovering = true);
    const onLeave = () => (hovering = false);
    content.addEventListener("mouseenter", onEnter);
    content.addEventListener("mouseleave", onLeave);

    return {
      destroy() {
        content.removeEventListener("mouseenter", onEnter);
        content.removeEventListener("mouseleave", onLeave);
        content.parentNode.removeChild(content);
      },
    };
  }
</script>

<template use:onload>
  <slot name="content" {hovering} />
</template>
