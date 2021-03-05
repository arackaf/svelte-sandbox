export function slotChildAdded(slotEl, { onChild, onAttributesChanged } = {}) {
  let mutationObserver;

  setTimeout(() => {
    slotEl.addEventListener("slotchange", slotChangeHandler);
  }, 1000);

  function slotChangeHandler(evt) {
    const el = slotEl.assignedElements()[0];

    if (el != null) {
      // mutating children not supported
      slotEl.removeEventListener("slotchange", slotChangeHandler);
      onChild && onChild(el);

      if (onAttributesChanged) {
        handleElementsAttributes(el, onAttributesChanged);
        mutationObserver = new MutationObserver(handleElementsAttributes.bind(null, el, onAttributesChanged));
        mutationObserver.observe(el, { attributes: true, childList: false, subtree: false });
      }
    }
  }
  return {
    destroy() {
      mutationObserver && mutationObserver.disconnect();
      slotEl.removeEventListener("slotchange", slotChangeHandler);
    }
  };
}

function handleElementsAttributes(el, onAttributesChanged) {
  const attrMap = getAttributeMapFromHost(el);
  onAttributesChanged(attrMap);
}

const getAttributeMapFromHost = host =>
  [...host.attributes].reduce((hash, attr) => {
    hash[attr.name] = attr.value;
    return hash;
  }, {});

export function slotRedirect(slotEl, { config } = {}) {
  let mutationObserver;
  slotEl.addEventListener("slotchange", slotChangeHandler);

  function slotChangeHandler(evt) {
    for (const elToMove of slotEl.assignedElements()) {
      for (const [selector, slotName] of Object.entries(config)) {
        if (elToMove.matches(selector)) {
          elToMove.setAttribute("slot", slotName);
          break; // first match or last match? In theory match the spec of <content> but good luck finding that and it shouldn't matter in practice
        }
      }
    }
  }
  return {
    destroy() {
      slotEl.removeEventListener("slotchange", slotChangeHandler);
    }
  };
}
