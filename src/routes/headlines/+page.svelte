<script lang="ts">
  import Headline from "$lib/components/Headline.svelte";
  import NewsCard from "$lib/components/NewsCard.svelte";
  import SideArticle from "$lib/components/SideArticle.svelte";

  export let data;
</script>

<main>
  {#if data.articles}
    <h1 class="text-3xl font-bold font-serif text-center pt-4">
      Latest Headlines
    </h1>
    <div class="grid grid-cols-2 px-20 py-8 gap-10">
      <div class="row-span-2">
        <Headline article={data.articles[0]} />
      </div>
      <div class="flex flex-col gap-10 items-center justify-items-center">
        <SideArticle article={data.articles[1]} theme="secondary" />
        <SideArticle article={data.articles[2]} theme="accent" />
      </div>
    </div>
    <h1 class="text-3xl font-bold font-serif text-center">Recent Articles</h1>
    <div class="px-14">
      <div class="grid grid-cols-3 items-center justify-items-stretch pt-10">
        {#each data.articles.slice(3) as article}
          <NewsCard {article} />
        {/each}
      </div>
    </div>
  {:else}
    <h2>No recent headlines</h2>
  {/if}
</main>
