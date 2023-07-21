import { error, redirect } from "@sveltejs/kit";

export async function load({ fetch, locals, params, setHeaders }) {
  const uid = locals.userID;

  if (!uid) {
    console.log(uid);
    throw redirect(301, "/login");
  }

  let category = params?.category ?? "home";

  setHeaders({
    "cache-control": "max-age=60",
  });

  let articles: Article[] = [];
  await fetch(`/headlines?category=${category}`)
    .then((response) =>
      response.json().then((data) => {
        articles = data;
      })
    )
    .catch(() => {
      throw error(502, "Connection error");
    });
  return { articles: articles };
}
