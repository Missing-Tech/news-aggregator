<script lang="ts">
  import { auth } from "$lib/firebase";
  import { signOut } from "firebase/auth";
  import { goto } from "$app/navigation";

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
      <label tabindex="0" class="btn btn-ghost btn-circle">
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
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/headlines/sports">Sports</a></li>
        <li><a href="/headlines/technology">Tech</a></li>
        <li><a href="/headlines/politics">Politics</a></li>
      </ul>
    </div>
  </div>
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
