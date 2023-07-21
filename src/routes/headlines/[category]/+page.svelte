<script lang="ts">
  import { page } from "$app/stores";
  import Headline from "$lib/components/Headline.svelte";
  import NewsCard from "$lib/components/NewsCard.svelte";
  import SideArticle from "$lib/components/SideArticle.svelte";
  $: category = $page.params.category;
  $: categoryText = category.charAt(0).toUpperCase() + category.slice(1);

  export let data;
  $: articles = data.articles;
</script>

<main>
  {#if articles.length > 0}
    <h1 class="text-3xl font-bold font-serif text-center pt-4">
      Latest {categoryText} Headlines
    </h1>
    <div class="grid grid-cols-2 px-20 py-8 gap-10">
      <div class="row-span-2">
        <Headline article={articles[0]} />
      </div>
      <div class="flex flex-col gap-10 items-center justify-items-center">
        <SideArticle article={articles[1]} theme="secondary" />
        <SideArticle article={articles[2]} theme="accent" />
      </div>
    </div>
    <h1 class="text-3xl font-bold font-serif text-center">
      Recent {categoryText} Articles
    </h1>
    <div class="px-14">
      <div class="grid grid-cols-3 items-center justify-items-stretch pt-10">
        {#each articles.slice(3) as article}
          <NewsCard {article} />
        {/each}
      </div>
    </div>
  {:else}
    <div class="flex flex-col justify-items-center items-center">
      <h2 class="text-3xl menu-title">Loading data</h2>
      <div class="loading-dots loading" />
    </div>
  {/if}
</main>
