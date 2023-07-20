<script lang="ts">
  import { enhance } from "$app/forms";
  import { fly } from "svelte/transition";

  export let form;
</script>

<div class="flex flex-col justify-center items-center gap-10 h-screen">
  <h1 class="text-7xl font-serif uppercase">Log in</h1>
  {#if form?.reason}
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
      <span>{form.reason}</span>
    </div>
  {/if}
  <form
    method="post"
    class=" flex flex-col items-center justify-center gap-5"
    use:enhance
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
