import { gssp } from "@/lib/next/gssp";
import { Post, prisma, Tag } from "@/prisma";
import Link from "next/link";
import { z } from "zod";

type Props = {
  post: Post & {
    tags: Tag[];
  };
};

const Page = ({ post }: Props) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div>
        {post.tags.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </div>
      <hr />
      <Link href={`/posts/${post.id}/edit`}>Edit</Link>
      <hr />
      <Link href="/posts">Back to Posts</Link>
    </div>
  );
};

export const getServerSideProps = gssp<Props>(async ({ query }) => {
  const { id } = z.object({ id: z.coerce.number() }).parse(query);
  const post = await prisma.post.findUnique({
    where: { id },
    include: { tags: true },
  });
  if (!post) return { notFound: true };
  return { props: { post } };
});

export default Page;
