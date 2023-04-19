// 📌:4-5
import { NewsListPage, NewsListPageProps } from "@/components/NewsListPage";
import { getNewsList } from "@/services/backend-api/news";
import { GetStaticProps } from "next";

type Props = NewsListPageProps;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { newsList, accessedAt } = await getNewsList();
  return {
    props: { newsList, accessedAt, renderedAt: "isr" },
    revalidate: 4, // 再検証の間隔を指定する
  };
};

export default NewsListPage;
