export type NewsItem = {
  publishedAt: string;
  slug: string;
  sentence: string;
  body: string;
};

export type NewsList = NewsItem[];

export async function getNewsList(): Promise<{
  newsList: NewsList;
  accessedAt: string;
}> {
  const res = await fetch(`${process.env.BACKEND_API_HOST}/api/news`);
  const data = await res.json();
  return data;
}

export async function getNewsItem(slug: string): Promise<{
  newsItem: NewsItem;
  accessedAt: string;
}> {
  const res = await fetch(`${process.env.BACKEND_API_HOST}/api/news/${slug}`);
  const data = await res.json();
  return data;
}
