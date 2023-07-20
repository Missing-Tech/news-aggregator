<script lang="ts">
  import { goto } from "$app/navigation";
  import { auth } from "$lib/firebase";
  import { signOut } from "firebase/auth";

  async function logOut() {
    const res = await fetch("/headlines", {
      method: "DELETE",
    });
    await signOut(auth).then(() => goto("/"));
  }
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start" />
  <div class="navbar-center">
    <a
      class="btn btn-ghost normal-case text-xl justify-center"
      href="/headlines">News</a
    >
  </div>
  <div class="navbar-end">
    <a class="btn" on:click={logOut}>Sign Out</a>
  </div>
</div>

<slot />
