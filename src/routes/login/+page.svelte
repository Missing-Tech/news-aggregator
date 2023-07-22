<script lang="ts">
  import { enhance } from "$app/forms";
  import ErrorBanner from "$lib/components/ErrorBanner.svelte";
  import { fly, fade } from "svelte/transition";

  export let form;

  let loading = false;
</script>

<div class="flex flex-col justify-center items-center gap-10 h-screen">
  <a href="/" class="btn btn-ghost flex-nowrap uppercase text-3xl font-serif"
    >News</a
  >
  <h1 class="text-7xl font-serif uppercase">Log in</h1>
  {#if form?.reason}
    <ErrorBanner reason={form.reason} />
  {/if}
  {#if loading}
    <span in:fade class="loading loading-dots loading-lg" />
  {/if}
  <form
    method="post"
    class=" flex flex-col items-center justify-center gap-5"
    use:enhance={() => {
      loading = true;

      return async ({ update }) => {
        await update();
        loading = false;
      };
    }}
  >
    <input
      type="text"
      placeholder="Email"
      class="input input-bordered w-full max-w-xs"
      name="email"
      required
    />
    <input
      type="password"
      placeholder="Password"
      required
      name="password"
      class="input input-bordered w-full max-w-xs"
    />
    <input type="submit" class="btn btn-accent w-full max-w-xs" />

    <a href="/signup" class="btn btn-ghost w-full max-w-xs">Sign up instead</a>
  </form>
</div>
