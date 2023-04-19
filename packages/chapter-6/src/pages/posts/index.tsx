import { Post, prisma } from "@/prisma";
import { GetServerSideProps } from "next";
import Link from "next/link";

type Props = {
  posts: Post[];
};

const Page = ({ posts }: Props) => {
  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // 📌:6-1 Postテーブルから全件取得
  const posts = await prisma.post.findMany();
  return { props: { posts } };
};

export default Page;
