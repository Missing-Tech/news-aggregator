import { error, redirect } from "@sveltejs/kit";

export async function load({
  fetch,
  locals,
  params,
  setHeaders,
}): Promise<{ articles: Article[] }> {
  const uid = locals.userID;

  if (!uid) {
    console.log(uid);
    throw redirect(301, "/login");
  }

  let category = params?.category ?? "home";

  setHeaders({
    "cache-control": "max-age=120",
  });

  let articles: Article[] = [];
  await fetch(`/headlines?category=${category}`)
    .then((response) =>
      response.json().then((data) => {
        articles = data;
      })
    )
    .catch(() => {
      throw error(501, { message: "Something went wrong" });
    });
  return { articles: articles };
}
