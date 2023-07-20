<script lang="ts">
  import ErrorBanner from "./../../lib/components/ErrorBanner.svelte";
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  export let form;
</script>

<div class="flex flex-col justify-center items-center gap-10 h-screen">
  <h1 class="text-7xl font-serif uppercase">Sign up</h1>
  {#if form?.reason}
    <ErrorBanner reason={form.reason} />
  {/if}
  <form
    class=" flex flex-col items-center justify-center gap-5"
    method="post"
    use:enhance
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
