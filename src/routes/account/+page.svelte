<script>
  import { currentUser } from "$lib/stores";
</script>

<div class="flex flex-col justify-center items-center gap-10 h-screen">
  <h1 class="text-3xl font-serif uppercase">Account Details</h1>
  <form class=" flex flex-col items-center justify-center gap-5" method="post">
    <input
      type="text"
      name="email"
      placeholder="Email"
      required
      value={$currentUser?.email}
      class="input input-bordered w-full max-w-xs"
    />
    <input
      type="text"
      name="username"
      placeholder="Add a username"
      value={$currentUser?.email}
      class="input input-bordered w-full max-w-xs"
    />
    <input
      type="submit"
      class="btn btn-secondary w-full max-w-xs"
      value="Update"
    />

    <a href="/login" class="btn btn-ghost w-full max-w-xs">Forgot password?</a>
  </form>
</div>
