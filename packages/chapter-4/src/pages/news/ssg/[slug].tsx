// 📌:4-4
import { NewsItemPage, NewsItemPageProps } from "@/components/NewsItemPage";
import { getNewsItem, getNewsList } from "@/services/backend-api/news";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = NewsItemPageProps;

export const getStaticPaths: GetStaticPaths = async () => {
  const { newsList } = await getNewsList();
  const paths = newsList.map((item) => `/news/ssg/${item.slug}`);
  // const paths: string[] = []; // 📌:4-8
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug;
  if (typeof slug !== "string") {
    throw new Error("invalid slug");
  }
  const { newsItem, accessedAt } = await getNewsItem(slug);
  return {
    props: { newsItem, accessedAt, renderedAt: "ssg" },
  };
};

export default NewsItemPage;
