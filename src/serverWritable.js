import { writable } from "svelte/store";
import { getContext } from 'svelte';

export default function getStore(arg) {
  let val = 0;

  console.log("XXX", typeof require);
  if (typeof window === "undefined") {
    //const lookup = eval(`require("./serverPrimer")`);
    //val = lookup(arg);
  }

  const result = writable(val, () => {});

  //return result;
  return { result, sync: val => result.update(x => val + x) };
}
