import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "$lib/firebase";
import { fail, redirect } from "@sveltejs/kit";
import { createAuthCookie } from "$lib/cookies";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { currentUser } from "$lib/stores.js";
export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    if (!email.includes("@")) {
      return fail(422, { reason: "Email is not valid" });
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await createAuthCookie(user, cookies);

        // Set the current user store to the user document
        const userDoc = doc(firestore, "users", user.uid);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
          currentUser?.set(userSnapshot!.data() as Account);
          setDoc(userDoc, { last_login: serverTimestamp() }, { merge: true });
        }
      })
      .catch(() => {
        return fail(422, { reason: "Failed to log in" });
      });

    throw redirect(303, "/headlines");
  },
};
