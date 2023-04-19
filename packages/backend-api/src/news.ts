import { faker } from "@faker-js/faker";

const amount = 10;

function getNewsList() {
  const from = "2023-01-01T00:00:00.000Z";
  const to = "2024-01-01T00:00:00.000Z";
  const newsList = [...new Array(amount)]
    .map(() => ({
      publishedAt: faker.date.between(from, to),
      slug: faker.lorem.slug(),
      sentence: faker.lorem.sentence(),
      body: faker.lorem.paragraphs(),
    }))
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .map((row) => ({ ...row, publishedAt: row.publishedAt.toISOString() }));
  return newsList;
}

export const newsList = getNewsList();

export function getNewsItem(slug: string) {
  const newsItem = newsList.find((row) => row.slug === slug);
  return newsItem;
}
