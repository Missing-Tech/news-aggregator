<script lang="ts">
  export let article: Article;
  export let theme: string = "secondary";
</script>

<div class="flex flex-rowgap-10">
  <figure>
    <a href={article.url} target="_blank">
      {#if article.multimedia[0].url}
        <img
          class="max-w-xs w-64 object-cover rounded-lg"
          src={article.multimedia[0].url}
          alt="News article's ogimage"
        />
      {:else}
        <img
          class="max-w-xs w-64 object-cover rounded-lg"
          src="https://placehold.co/600x400?text=No+image"
          alt="News article's ogimage"
        />
      {/if}
    </a>
  </figure>

  <div class="px-10 flex-col gap-5 flex">
    <h2 class="card-title line-clamp-4 text-ellipsis h-28">
      {article.title}
    </h2>
    <div class="flex flex-row justify-between">
      <!-- <div class="line-clamp-1 text-ellipsis max-w-lg">{article.source_id}</div>
      {#if article.creator}
        <div class="line-clamp-1 text-ellipsis max-w-lg">
          {article.creator[0]}
        </div>
      {/if} -->
    </div>
    <div class="">
      <a class="btn btn-{theme}" href={article.url} target="_blank">Read more</a
      >
    </div>
  </div>
</div>
