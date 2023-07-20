<script lang="ts">
  import NewsCard from "$lib/components/NewsCard.svelte";

  export let data;
</script>

<main>
  {#if data.articles}
    <h1>Articles</h1>
    <div class="flex flex-col gap-5">
      {#each data.articles as article}
        <NewsCard {article} />
      {/each}
    </div>
  {:else}
    <h2>No recent headlines</h2>
  {/if}
</main>
