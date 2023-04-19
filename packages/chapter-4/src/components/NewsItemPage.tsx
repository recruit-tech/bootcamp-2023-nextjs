import Link from "next/link";
import { NewsItem } from "@/services/backend-api/news";

type Props = {
  newsItem: NewsItem;
  accessedAt: string;
  renderedAt: "ssr" | "ssg" | "isr";
};
export type NewsItemPageProps = Props;

export const NewsItemPage = ({ newsItem, accessedAt, renderedAt }: Props) => {
  return (
    <div>
      <h1>
        {renderedAt.toUpperCase()} News: {newsItem.slug}
      </h1>
      <p>accessedAt: {accessedAt}</p>
      <p>renderedAt: {renderedAt}</p>
      <hr />
      <div style={{ padding: "40px" }}>
        <h2>{newsItem.sentence}</h2>
        <p>{newsItem.body}</p>
      </div>
      <hr />
      <Link href={`/news/${renderedAt}`}>
        Back to {renderedAt.toUpperCase()} News
      </Link>
    </div>
  );
};
