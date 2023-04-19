import type { NewsList } from "@/services/backend-api/news";
import Link from "next/link";

type Props = {
  newsList: NewsList;
  accessedAt: string;
  renderedAt: "ssr" | "ssg" | "isr";
};
export type NewsListPageProps = Props;

export const NewsListPage = ({ newsList, accessedAt, renderedAt }: Props) => {
  return (
    <div>
      <h1>{renderedAt.toUpperCase()} News</h1>
      <p>accessedAt: {accessedAt}</p>
      <p>renderedAt: {renderedAt}</p>
      <hr />
      <ul style={{ padding: "40px" }}>
        {newsList.map((item) => (
          <li key={item.slug}>
            {/* 📌:4-9　 prefetch が無効な場合、リンク先ページは事前レンダリングされない */}
            {/* マウスオーバーで事前レンダリングされる */}
            <Link href={`/news/${renderedAt}/${item.slug}`} prefetch={false}>
              {item.slug}
            </Link>

            {/* 📌:4-10 prefetch が有効な場合、リンク先ページが事前レンダリングされる */}
            {/* ただし、Link コンポーネントが画面に表示されたとき */}
            {/* 
            <Link href={`/news/${renderedAt}/${item.slug}`} prefetch={true}>
              {item.slug}
            </Link>
            */}

            {/* 📌:4-11 prefetch の指定がない（デフォルト）はどっち？ */}
            {/* <Link href={`/news/${renderedAt}/${item.slug}`}>{item.slug}</Link> */}
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/">Back to Top</Link>
    </div>
  );
};
