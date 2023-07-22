<script lang="ts">
  import { currentUser } from "$lib/stores";
  import { auth } from "$lib/firebase";
  import { signOut } from "firebase/auth";
  import { goto } from "$app/navigation";

  async function logOut() {
    const res = await fetch("/headlines", {
      method: "DELETE",
    });
    await signOut(auth).then(() => goto("/"));
  }

  $: profileUrl = $currentUser?.profile_picture;
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
        <li><a href="/headlines/tech">Tech</a></li>
        <li><a href="/headlines/politics">Politics</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a
      class="btn btn-ghost text-xl justify-center font-serif uppercase"
      href="/headlines">News</a
    >
  </div>
  <div class="navbar-end">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          {#if profileUrl}
            <img src={profileUrl} />
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
              ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              /></svg
            >{/if}
        </div>
      </label>
      <ul
        tabindex="0"
        class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li><a href="/account">Settings</a></li>
        <li><a on:click={logOut}>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
