<script>
  import serverWritable from "./serverWritable";

  //$: store = serverWritable(someProp);
  let { result: store, sync } = serverWritable(2);
  //$: sync(someProp);
</script>

<div>Ayyy</div>