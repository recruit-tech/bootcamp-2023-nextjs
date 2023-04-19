// 📌:4-2
import { NewsItemPage, NewsItemPageProps } from "@/components/NewsItemPage";
import { getNewsItem } from "@/services/backend-api/news";
import { GetServerSideProps } from "next";

type Props = NewsItemPageProps;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const slug = query.slug;
  if (typeof slug !== "string") {
    throw new Error("invalid slug");
  }
  const { newsItem, accessedAt } = await getNewsItem(slug);
  return {
    props: { newsItem, accessedAt, renderedAt: "ssr" },
  };
};

export default NewsItemPage;
