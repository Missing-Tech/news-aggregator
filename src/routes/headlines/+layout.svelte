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
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
    </div>
    <a class="btn btn-ghost normal-case text-xl" href="/headlines">News</a>
  </div>
  <div class="navbar-end">
    <a class="btn" on:click={logOut}>Sign Out</a>
  </div>
</div>

<slot />
