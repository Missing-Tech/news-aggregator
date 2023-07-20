import { NYT_KEY } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

export async function load({ locals, params }) {
  const uid = locals.userID;

  if (!uid) {
    console.log(uid);
    throw redirect(301, "/login");
  }

  let category = params.category || "home";

  let articles: Array<Article> = [];
  await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${NYT_KEY}`
  )
    .then(async (response) => response.json())
    .then((data) => {
      articles = data.results as Array<Article>;
    });
  return { articles: articles };
}
