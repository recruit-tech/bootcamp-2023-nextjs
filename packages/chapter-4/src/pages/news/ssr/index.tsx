// 📌:4-1
import { NewsListPage, NewsListPageProps } from "@/components/NewsListPage";
import { getNewsList } from "@/services/backend-api/news";
import { GetServerSideProps } from "next";

type Props = NewsListPageProps;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { newsList, accessedAt } = await getNewsList();
  return {
    props: { newsList, accessedAt, renderedAt: "ssr" },
  };
};

export default NewsListPage;
