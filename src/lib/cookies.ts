import type { Cookies } from "@sveltejs/kit";
import { adminAuth } from "./server/admin";
import type { User } from "firebase/auth";

export async function createAuthCookie(user: User, cookies: Cookies) {
  const idToken = await user.getIdToken();

  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

  const decodedIdToken = await adminAuth.verifyIdToken(idToken);

  if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
    const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
    const options = {
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
      path: "/",
    };

    cookies.set("__session", cookie, options);
  }
}
