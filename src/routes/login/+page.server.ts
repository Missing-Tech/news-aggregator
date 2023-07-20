import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "$lib/firebase";
import { fail, redirect } from "@sveltejs/kit";
import { createAuthCookie } from "$lib/cookies";

export const actions = {
  default: async ({ request, cookies }) => {
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
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await createAuthCookie(user, cookies);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        return fail(errorCode, { reason: "Failed to sign up" });
      });

    throw redirect(303, "/headlines");
  },
};
