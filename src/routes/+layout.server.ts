import { NEWS_KEY } from "$env/static/private";
export interface Article {
  title: string;
  author: string;
  published_date: Date;
  link: string;
  excerpt: string;
  media: string;
}

export async function load() {
  let articles: Array<Article> = [];
  await fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_KEY}&language=en`)
    .then((response) => response.json())
    .then((data) => {
      articles = data.results as Array<Article>;
    })
    .catch((error) => {
      throw error(404, { message: "Not found" });
    });
  return { articles: articles };
}
