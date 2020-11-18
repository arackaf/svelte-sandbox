<script>
  import serverWritable from "./serverWritable";
  import SSRPrime from "./SSRPrime.svelte";
  import {get} from "svelte/store";

  import ServerChild from "./ServerChild"

  let value = typeof window === "object" ? "CLIENT" : "SERVER";
  export let someProp = 1;

  console.log(value);

  //$: store = serverWritable(someProp);
  let { result: store, sync } = serverWritable(someProp);
  console.log("result", get(store));
  //$: sync(someProp);
</script>


<h1>Hello from the {value}!</h1>
<br />
<h2>{$store}</h2>

<ServerChild />
