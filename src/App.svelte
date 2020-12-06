<script context="module">
  import { register } from "svelte-loadable";

  // Loaders must be registered outside of the render tree.
  const MyLoader = register({
    loader: () => import("./CodeSplit.svelte"),
    resolve: () => require.resolve("./CodeSplit.svelte")
  });
</script>

<script>
  import serverWritable from "./serverWritable";
  import SSRPrime from "./SSRPrime.svelte";
  import { get } from "svelte/store";

  import Loadable from "svelte-loadable";

  import ServerChild from "./ServerChild";

  let value = typeof window === "object" ? "CLIENT" : "SERVER";
  export let someProp = 1;

  console.log(value);

  //$: store = serverWritable(someProp);
  let { result: store, sync } = serverWritable(someProp);
  console.log("result", get(store));
  //$: sync(someProp);
</script>

{#if true}
  <Loadable loader={MyLoader} />
{/if}

<h1>Hello from the {value}!</h1>
<br />
<h2>{$store}</h2>

<ServerChild />
