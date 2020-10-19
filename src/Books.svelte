<script>
  let title = "";
  let books = [];
  let loaded = false;
  let loading = false;

  const query = (title) => `{allBooks(PAGE:1, PAGE_SIZE: 10, SORT: { title: 1 }, title_contains: "${title}") { Books { title } }}`;

  async function search() {
    loading = true;

    let res = await fetch(`https://mylibrary.io/graphql-public?query=${encodeURIComponent(query(title))}`);
    let js = await res.json();
    let results = js?.data?.allBooks?.Books ?? [];

    loaded = true;
    books = results;
    loading = false;
  }
</script>

<div>
  <input bind:value={title} />
  <button on:click={search}>Go</button>

  <div style="margin-top: 50px;">
    {#if loading}<span>LOADING</span>{/if}
    {#if loaded}
      {#if books.length}
        <div>
          {#each books as book}
            <div>{book.title}</div>
          {/each}
        </div>
      {:else}
        <div>No Results</div>
      {/if}
    {:else}<span>Search for some shit</span>{/if}
  </div>
</div>
