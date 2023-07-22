<script lang="ts">
  import GridSelectItem from "$lib/components/GridSelectItem.svelte";
  import ErrorBanner from "$lib/components/ErrorBanner.svelte";
  import { enhance } from "$app/forms";
  import { fade, fly } from "svelte/transition";
  export let form;

  let loading = false;
  let step = 1;

  function incrementStep() {
    if (step < 3) step++;
  }
  function decrementStep() {
    if (step > 0) step--;
  }
</script>

<div class="flex flex-col justify-center items-center gap-10 h-screen">
  <h1 class="text-7xl font-serif uppercase">Sign up</h1>
  {#if form?.reason}
    <ErrorBanner reason={form.reason} />
  {/if}
  {#if loading}
    <span in:fade class="loading loading-dots loading-lg" />
  {/if}
  <ul class="steps">
    <li
      class="step"
      class:step-primary={step >= 0}
      class:step-secondary={step == 3}
    >
      Register
    </li>
    <li
      class="step"
      class:step-primary={step >= 1}
      class:step-secondary={step == 3}
    >
      Choose Outlets
    </li>
    <li
      class="step"
      class:step-primary={step >= 2}
      class:step-secondary={step == 3}
    >
      Edit Profile
    </li>
    <li
      class="step"
      class:step-primary={step >= 3}
      class:step-secondary={step == 3}
    >
      Start reading
    </li>
  </ul>
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
    {#if step == 0}
      <input
        type="text"
        name="email"
        placeholder="Email"
        required
        in:fly={{ x: -20 }}
        class="input input-bordered w-full max-w-xs"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        in:fly={{ x: -20 }}
        class="input input-bordered w-full max-w-xs"
      />
    {:else if step == 1}
      <div class="grid grid-cols-3 gap-3" in:fly={{ x: -20 }}>
        {#each { length: 9 } as _, i}
          <GridSelectItem />
        {/each}
      </div>
    {:else if step == 3}
      <input type="submit" class="btn btn-secondary w-full max-w-xs" />
    {/if}
    {#if step != 3}
      <input
        class="btn btn-primary w-full max-w-xs"
        value="Next"
        in:fly={{ x: -20 }}
        on:click={incrementStep}
      />
    {/if}
    <input
      class="btn btn-ghost w-full max-w-xs"
      value="Back"
      on:click={decrementStep}
    />

    <a href="/login" class="btn btn-ghost w-full max-w-xs">Log in instead</a>
  </form>
</div>
