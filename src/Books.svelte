<script>
  let title = "";
  let books = null;

  const query = title => `{allBooks(PAGE:1, PAGE_SIZE: 10, SORT: { title: 1 }, title_contains: "${title}") { Books { title } }}`;

  async function getBooks() {
    let res = await fetch(`https://mylibrary.io/graphql-public?query=${encodeURIComponent(query(title))}`);
    let js = await res.json();
    return js?.data?.allBooks?.Books ?? [];
  }

</script>

<div>
  <input bind:value={title} />
  <button on:click={() => books = getBooks()}>Go</button>

  <div style="margin-top: 50px;">
    {#if books == null}
      <span>Search for some stuff</span>
    {:else}
      {#await books}
        <span>LOADING</span>
      {:then books}
        {#if books.length}
          <div>
            {#each books as book}
              <div>{book.title}</div>
            {/each}
          </div>
        {:else}
          <div>No Results</div>
        {/if}
      {:catch}
        <span>Shit Failed Yo</span>
      {/await}
    {/if}

    <hr />
  </div>
</div>
