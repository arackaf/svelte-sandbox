<script>
  import { loadQuery } from "./graphql/query";
  const query = `query getBooks($title: String) {allBooks(PAGE:1, PAGE_SIZE: 10, SORT: { title: 1 }, title_contains: $title) { Books { title } }}`;

  let title = "";
  const getVariables = () => ({ title });
  const syncVariables = () => variables = getVariables();

  let variables = getVariables();

  const { queryState, sync } = loadQuery(query);
  $: sync(variables);

</script>

<div>
  <input bind:value={title} />
  <button on:click={syncVariables}>Go</button>

  <div style="margin-top: 50px;">
    {#if $queryState.loading}<span>LOADING</span>{/if}

    {#if $queryState.loaded}
      {#each $queryState?.data?.allBooks?.Books ?? [] as book}
        <div>{book.title}</div>
      {:else}
        <div>No Results</div>
      {/each}
    {/if}

    <hr />
  </div>
</div>
