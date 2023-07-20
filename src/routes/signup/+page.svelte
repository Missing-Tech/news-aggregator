<script lang="ts">
  import ErrorBanner from "./../../lib/components/ErrorBanner.svelte";
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  export let form;

  let loading = false;
</script>

<div class="flex flex-col justify-center items-center gap-10 h-screen">
  <h1 class="text-7xl font-serif uppercase">Sign up</h1>
  {#if form?.reason}
    <ErrorBanner reason={form.reason} />
  {/if}
  {#if loading}
    <span in:fade class="loading loading-dots loading-lg" />
  {/if}
  <form
    class=" flex flex-col items-center justify-center gap-5"
    method="post"
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
      name="email"
      placeholder="Email"
      required
      class="input input-bordered w-full max-w-xs"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      required
      class="input input-bordered w-full max-w-xs"
    />
    <input type="submit" class="btn btn-secondary w-full max-w-xs" />

    <a href="/login" class="btn btn-ghost w-full max-w-xs">Log in instead</a>
  </form>
</div>
