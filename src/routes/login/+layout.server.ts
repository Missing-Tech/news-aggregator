import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  const uid = locals.userID;

  if (uid) {
    throw redirect(301, "/headlines");
  }
}) satisfies LayoutServerLoad;
