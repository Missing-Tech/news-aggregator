import { json, redirect, type RequestHandler } from "@sveltejs/kit";
import { NYT_KEY } from "$env/static/private";

export const DELETE: RequestHandler = async ({ cookies }) => {
  cookies.delete("__session", { path: "/" });
  return json({ status: "signedOut" });
};

export async function GET({ url, setHeaders, request }): Promise<Response> {
  const category = url.searchParams.get("category") || "";

  setHeaders({
    "cache-control": "max-age=120",
  });

  let articles: Array<Article> = [];

  await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${NYT_KEY}`
  )
    .then(async (response) => response.json())
    .then((data) => {
      articles = data.results as Array<Article>;
    });

  // await fetch(
  //   `https://api.newscatcherapi.com/v2/latest_headlines?countries=GB&topic=${category}`,
  //   {
  //     headers: {
  //       'x-api-key': NEWS_KEY
  //     }
  //   }
  // )
  //   .then(async (response) => response.json())
  //   .then((data) => {
  //     articles = data.results as Array<Article>;
  //   });

  return json(articles);
}
