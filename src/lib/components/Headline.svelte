<script lang="ts">
  export let article: Article;
</script>

<div class="flex flex-col">
  <figure class="object-cover">
    <a href={article.link} target="_blank">
      {#if article.media}
        <img
          class="h-[70%] object-cover rounded-lg w-full max-h-96 aspect-video"
          src={article.media}
          alt="News article's ogimage"
        />
      {:else}
        <img
          src="https://placehold.co/600x400?text=No+image"
          alt="News article's ogimage"
        />
      {/if}
    </a>
  </figure>
  <div class="flex flex-row py-2 pt-4 justify-between">
    <div>{article.author}</div>
  </div>
  <h2 class="card-title">{article.title}</h2>
  <div class="flex flex-row justify-between line-clamp-2 gap-4 pt-2">
    <div class="line-clamp-3 text-ellipsis max-w-lg text-sm">
      {article.excerpt}
    </div>
    <a class="btn btn-primary" href={article.link || ""} target="_blank"
      >Read more</a
    >
  </div>
</div>
