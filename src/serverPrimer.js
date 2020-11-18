
import { get } from "svelte/store";
import { getContext } from "svelte";

module.exports = function (arg) {
  const result = `SERVER " ' Hope that worked ` + arg;
  const cachePrime = getContext("__graphql__");;

  console.log("GOTTEN", arg);
  cachePrime.update(o => Object.assign(o, { [arg]: result }));
  console.log("CURR", get(cachePrime));

  return result;
};
