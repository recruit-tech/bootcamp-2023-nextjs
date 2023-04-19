// 📌:4-3
import { NewsListPage, NewsListPageProps } from "@/components/NewsListPage";
import { getNewsList } from "@/services/backend-api/news";
import { GetStaticProps } from "next";

type Props = NewsListPageProps;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { newsList, accessedAt } = await getNewsList();
  return {
    props: { newsList, accessedAt, renderedAt: "ssg" },
  };
};

export default NewsListPage;
