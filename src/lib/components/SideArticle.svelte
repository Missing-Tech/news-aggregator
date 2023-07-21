<script lang="ts">
  export let article: Article;
  export let theme: string = "secondary";
</script>

<div class="flex flex-row min-w-full">
  <figure>
    <a href={article.url} target="_blank">
      {#if article.multimedia[0].url}
        <img
          class="max-w-xs w-64 object-cover rounded-lg aspect-square"
          src={article.multimedia[0].url}
          alt="News article's ogimage"
        />
      {:else}
        <img
          class="max-w-xs w-64 object-cover aspect-square rounded-lg"
          src="https://placehold.co/600x400?text=No+image"
          alt="News article's ogimage"
        />
      {/if}
    </a>
  </figure>

  <div class="px-10 flex-col gap-5 flex w-full">
    <div class="flex flex-col justify-start items-start h-full">
      <h2 class="card-title line-clamp-4 text-ellipsis min-w-full">
        {article.title}
      </h2>
      <div class=" py-2">
        {article.byline}
      </div>
      <div class="line-clamp-3 text-ellipsis max-w-lg text-sm">
        {article.abstract}
      </div>
    </div>
    <div class="flex flex-row justify-end w-full h-full items-end">
      <a class="btn btn-{theme}" href={article.url} target="_blank">Read more</a
      >
    </div>
  </div>
</div>
