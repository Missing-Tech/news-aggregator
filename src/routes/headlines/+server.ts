import { json, redirect, type RequestHandler } from "@sveltejs/kit";
import { NEWS_KEY } from "$env/static/private";

export const DELETE: RequestHandler = async ({ cookies }) => {
  cookies.delete("__session", { path: "/" });
  return json({ status: "signedOut" });
};

export async function GET({ url, setHeaders, request }): Promise<Response> {
  const searchParamsCategory = url.searchParams.get("category");
  const category =
    searchParamsCategory == "home" ? "news" : searchParamsCategory;

  setHeaders({
    "cache-control": "max-age=120",
  });

  let articles: Array<Article> = [];

  // await fetch(
  //   `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${NYT_KEY}`
  // )
  //   .then(async (response) => response.json())
  //   .then((data) => {
  //     articles = data.results as Array<Article>;
  //   });

  await fetch(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=GB&topic=${category}`,
    {
      headers: {
        "x-api-key": NEWS_KEY,
      },
    }
  )
    .then(async (response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data, category);
      articles = data.articles as Array<Article>;
      console.log(articles);
    });

  return json(articles);
}
