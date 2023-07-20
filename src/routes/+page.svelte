<script lang="ts">
  import { auth, firestore } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { onMount } from "svelte";
  import { FirebaseApp, userStore } from "sveltefire";
  import type { LayoutData } from "./$types";
  import NewsCard from "$lib/components/NewsCard.svelte";

  let user = userStore(auth);

  /** @type {import('./$types').LayoutData} */
  export let data: LayoutData;

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }
  function signOut() {
    auth.signOut();
  }
</script>

<FirebaseApp {firestore} {auth}>
  {#if $user}
    <span class="">Logged in</span>
    <button class="btn" on:click={signOut}>Sign out</button>
  {:else}
    <button class=" btn btn-primary" on:click={signInWithGoogle}
      >Sign in with Google</button
    >
  {/if}
</FirebaseApp>

<main>
  {#if data.articles}
    <h1>Articles</h1>
    <div class="flex flex-col gap-5">
      {#each data.articles as article}
        <NewsCard {article} />
      {/each}
    </div>
  {:else}
    <h2>No recent headlines</h2>
  {/if}
</main>
