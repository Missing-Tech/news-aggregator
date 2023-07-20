import { NEWS_KEY } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
  const uid = locals.userID;

  if (!uid) {
    console.log(uid);
    throw redirect(301, "/login");
  }

  let articles: Array<Article> = [];
  await fetch(
    `https://newsdata.io/api/1/news?apikey=${NEWS_KEY}&language=en&country=gb&q=sport`
  )
    .then((response) => response.json())
    .then((data) => {
      articles = data.results as Array<Article>;
    })
    .catch((error) => {
      throw error(404, { message: "Not found" });
    });
  return { articles: articles };
}
