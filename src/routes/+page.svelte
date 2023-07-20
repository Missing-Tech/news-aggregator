<script lang="ts">
  import { auth, firestore } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { FirebaseApp, userStore } from "sveltefire";
</script>

<div class="flex flex-col items-center pt-72 gap-5">
  <FirebaseApp {firestore} {auth}>
    <h1 class="text-5xl uppercase font-serif">News Aggregator</h1>
    <a class=" btn btn-primary" href="/login">Log in</a>
    <a class=" btn btn-ghost" href="/signup">No account? Sign up</a>
  </FirebaseApp>
</div>
