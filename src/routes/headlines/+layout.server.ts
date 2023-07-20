import { NEWS_KEY } from "$env/static/private";

export async function load() {
  let articles: Array<Article> = [];
  await fetch(
    `https://newsdata.io/api/1/news?apikey=${NEWS_KEY}&language=en&country=gb`
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
