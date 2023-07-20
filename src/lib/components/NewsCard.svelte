<script lang="ts">
  export let article: Article;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <figure>
    {#if article.image_url}
      <img src={article.image_url} alt="News article's ogimage" />
    {:else}
      <img
        src="https://placehold.co/600x400?text=No+image"
        alt="News article's ogimage"
      />
    {/if}
  </figure>
  <div class="card-body">
    <h2 class="card-title">{article.title}</h2>
    <div class="card-actions justify-end">
      <a class="btn btn-primary" href={article.link}>Read more</a>
    </div>
  </div>
</div>
