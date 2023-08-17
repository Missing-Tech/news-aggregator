<script lang="ts">
  export let article: Article;
</script>

<div class="card aspect-square h-[28rem]">
  <figure class="object-cover aspect-video">
    {#if article.media}
      <img
        class=" object-cover h-56 aspect-video rounded-lg"
        src={article.media}
        alt="News article's ogimage"
      />
    {:else}
      <img
        class="object-cover h-56 aspect-video rounded-lg"
        src="https://placehold.co/600x400?text=No+image"
        alt="News article's ogimage"
      />
    {/if}
  </figure>
  <div class="card-body px-8 py-0">
    <h2 class="card-title h-14 items-start text-ellipsis line-clamp-2">
      {article.title}
    </h2>
    <div class="card-actions justify-between pt-2 items-center">
      <div class="line-clamp-1 text-ellipsis w-64">
        {article.author}
      </div>
      <a class="btn btn-neutral" href={article.link} target="_blank"
        >Read more</a
      >
    </div>
  </div>
</div>
