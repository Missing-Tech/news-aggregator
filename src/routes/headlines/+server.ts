import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const DELETE: RequestHandler = async ({ cookies }) => {
  cookies.delete("__session", { path: "/" });
  return json({ status: "signedOut" });
};
