import ModalContainer from "./ModalContainer";

const CONTAINER_ID = "__svelte_modal_container";

const container = document.createElement("div");
container.id = CONTAINER_ID;
document.body.appendChild(container);

const overlay = new ModalContainer({
  target: container,
});


