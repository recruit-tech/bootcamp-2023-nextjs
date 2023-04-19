// 📌:4-6
import { NewsItemPage, NewsItemPageProps } from "@/components/NewsItemPage";
import { getNewsItem } from "@/services/backend-api/news";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = NewsItemPageProps;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug;
  if (typeof slug !== "string") {
    throw new Error("invalid slug");
  }
  const { newsItem, accessedAt } = await getNewsItem(slug);
  return {
    props: { newsItem, accessedAt, renderedAt: "isr" },
    revalidate: 4, // 再検証の間隔を指定する
  };
};

export default NewsItemPage;
