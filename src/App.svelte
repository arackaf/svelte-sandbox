<script>
  import AnimateSandbox from "./AnimateSandbox.svelte";
  import BodyChild from "./BodyChild.svelte";
  import Books from "./Books";
  import Counter from "./Counter.svelte";
  import Lazy from "./Lazy";
  import Mapper from "./Mapper.svelte";
  import Mapper2 from "./Mapper2.svelte";
  import Mapper3 from "./Mapper3.svelte";
  import Modal from "svelte-helpers/Modal";

  let lazyRequested = false;

  let showBodyChild = true;

  let junkOpen = false;
  let modalOpen = false;
  let secondModalOpen = false;

  let counter;

  function goIn(node) {
    console.log("IN", node);
    return {
      duration: 2000,
      css: t => `opacity: ${t}`
    };
  }
  function goOut(node) {
    console.log("OUT", node);
    return {
      duration: 2000,
      css: t => `opacity: ${t}`
    };
  }

  const closeModal1 = () => (modalOpen = false);
  const closeModal2 = () => (secondModalOpen = false);
</script>

<button on:click={() => (junkOpen = true)}>Show junk</button>
<button on:click={() => (junkOpen = false)}>Hide junk</button>

<button on:click={() => (modalOpen = true)}>Show Modal</button>

<Modal open={modalOpen} onClose={closeModal1}>
  <h1>Hi there</h1>
  <button on:click={() => (modalOpen = false)}>Close</button>

  <br />
  <button on:click={() => (secondModalOpen = true)}>Second Modal</button>
</Modal>

<Modal open={secondModalOpen} onClose={closeModal2}>
  <h1>This is a bad UI</h1>
  <button on:click={() => (secondModalOpen = false)}>Close</button>
</Modal>

<br /><br />

{#if junkOpen}
  <div in:goIn out:goOut>
    <h1>JUNK</h1>
  </div>
{/if}

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
