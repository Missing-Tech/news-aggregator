<script lang="ts">
  import { fly } from "svelte/transition";

  export let reason: string;
</script>

<div
  in:fly={{
    duration: 300,
    x: 100,
    opacity: 0.5,
  }}
  class="alert alert-error w-full max-w-xs"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="stroke-current shrink-0 h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    /></svg
  >
  <span>{reason}</span>
</div>
