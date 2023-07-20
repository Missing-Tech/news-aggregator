<script lang="ts">
  export let article: Article;
</script>

<div class="flex flex-col">
  <figure class=" object-cover">
    <a href={article.link} target="_blank">
      {#if article.image_url}
        <img
          class="h-[70%] object-cover rounded-lg w-full max-h-96"
          src={article.image_url}
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
  <div class="flex flex-row py-4 justify-between">
    <div>
      {article.source_id}
    </div>
    {#if article.creator}
      <div>{article.creator[0]}</div>
    {/if}
  </div>
  <div class="flex flex-row justify-between line-clamp-2">
    <h2 class="card-title">{article.title}</h2>
    <a class="btn btn-primary" href={article.link} target="_blank">Read more</a>
  </div>
</div>
