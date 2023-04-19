import express, { Request } from "express";
import { getNewsItem, newsList } from "./src/news";
const app = express();

app.use(express.json());

async function createJsonResponse<T>(data: T, req: Request, delay = 0) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const date = new Date();
  const accessedAt = date.toISOString();
  console.log(date, req.url);
  return {
    ...data,
    accessedAt,
  };
}

app.get("/api/now", async (req, res) => {
  res.json(await createJsonResponse({}, req));
});

app.get("/api/news", async (req, res) => {
  res.json(await createJsonResponse({ newsList }, req));
});

app.get("/api/news/:slug", async (req, res) => {
  const newsItem = getNewsItem(req.params.slug);
  if (!newsItem) {
    res.status(404).end();
    return;
  }
  res.json(await createJsonResponse({ newsItem }, req));
  // res.json(await createJsonResponse({ newsItem }, req, 1000)); // 📌:4-7
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
