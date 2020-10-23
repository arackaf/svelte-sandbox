<script>
  import AnimateSandbox from "./AnimateSandbox.svelte";
  import BodyChild from "./BodyChild.svelte";
  import Books from "./Books";
  import Counter from "./Counter.svelte";
  import Lazy from "./Lazy";
  import Mapper from "./Mapper.svelte";
  import Mapper2 from "./Mapper2.svelte";
  import Mapper3 from "./Mapper3.svelte";
  import ModalContent from "./modal/ModalContent.svelte";
  import Overlay from "./modal/Overlay.svelte";

  import "./modal/styles.css";

  let lazyRequested = false;

  let showBodyChild = true;

  let modalOpen = false;
  let secondModalOpen = false;

  let counter;
</script>

<button on:click={() => (modalOpen = true)}>Show Modal</button>

<ModalContent open={modalOpen}>
  <h1>Hi there</h1>
  <button on:click={() => (modalOpen = false)}>Close</button>

  <br />
  <button on:click={() => (secondModalOpen = true)}>Second Modal</button>
</ModalContent>

<ModalContent open={secondModalOpen}>
  <h1>This is a bad UI</h1>
  <button on:click={() => (secondModalOpen = false)}>Close</button>
</ModalContent>

<br /><br />

<button on:click={() => (showBodyChild = !showBodyChild)}>Toggle</button>
{#if showBodyChild}
  <BodyChild>
    <Counter bind:this={counter} initialValue={5} />
  </BodyChild>
{/if}

<br /><br />

<AnimateSandbox />

<br /><br />

<Books />

<br /><br />

<button on:click={() => (lazyRequested = true)}>Gimme lazy content</button>

{#if lazyRequested}
  <Lazy import={() => import('./Header')} message="Hey there">
    <span slot="loading">Loading that header boo</span>
    <span slot="error">Couln't load header sorry</span>
  </Lazy>
{/if}

<br />

<Mapper count={4} />

<br />

<Mapper count={4}>
  <div let:x slot="content" style="color: green">Overridden {x}</div>
</Mapper>

<br />

<Mapper2 count={4}>
  <div slot="content" let:x let:hovering style="color: orange;">Overridden: {x} Hovering: {hovering}</div>
</Mapper2>

<br />

<Mapper3 count={4}>
  <div slot="content" let:x let:hovering style="color: purple;">Yoooo: {x} Hovering: {hovering}</div>
</Mapper3>
