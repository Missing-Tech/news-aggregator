import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "$lib/firebase";
import { ActionFailure, fail, redirect } from "@sveltejs/kit";
import { createAuthCookie } from "$lib/cookies.js";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export const actions = {
  default: async ({
    request,
    cookies,
  }): Promise<ActionFailure<{ reason: string }>> => {
    const data = await request.formData();
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    if (!email.includes("@")) {
      return fail(422, { reason: "Email is not valid" });
    }
    if (password.length < 7) {
      return fail(423, {
        reason: "Password needs to be >8 characters",
      });
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await createAuthCookie(user, cookies);

        await setDoc(doc(firestore, "users", user.uid), {
          name: "",
          last_login: serverTimestamp(),
          email: email,
          signup_date: serverTimestamp(),
          profile_picture: "",
        });
      })
      .catch((error) => {
        const errorCode = error.code;

        return fail(errorCode, { reason: "Failed to sign up" });
      });

    throw redirect(303, "/headlines");
  },
};
