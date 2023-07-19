<script lang="ts">
  import { auth, firestore } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { FirebaseApp, userStore } from "sveltefire";

  let user = userStore(auth);

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
