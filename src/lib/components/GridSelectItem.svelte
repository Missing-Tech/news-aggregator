<script>
  let selected = false;
</script>

<div
  class="w-32 bg-slate-200 aspect-square rounded-lg hover:bg-slate-300 cursor-pointer indicator"
  on:click={() => (selected = !selected)}
>
  {#if selected}
    <span class=" indicator-item absolute badge badge-primary"
      ><i class="fa-solid fa-check" /></span
    >
  {/if}
  <h2>NYT</h2>
</div>
