import { ErrorMessage } from "@/components/ErrorMessage";
import { gssp } from "@/lib/next/gssp";
import { updatePostInputSchema, UpdatePostInputSchemaType } from "@/lib/zod";
import { Post, prisma } from "@/prisma";
import { updatePost } from "@/services/client/posts";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  post: Post;
};

const Page = ({ post }: Props) => {
  const router = useRouter();
  const [error, setError] = useState<string>();
  const { handleSubmit, register, formState } =
    useForm<UpdatePostInputSchemaType>({
      defaultValues: post, // 📌:6-3 サーバーで取得したデータを、初期値として設定
      resolver: zodResolver(updatePostInputSchema),
    });
  return (
    <form
      onSubmit={handleSubmit(async (values) => {
        const { data, err } = await updatePost(values, post.id);
        if (err) {
          setError(err.message);
          return;
        }
        router.push(`/posts/${data.id}`);
      })}
    >
      <fieldset style={{ padding: "16px" }}>
        <legend>記事を編集する</legend>
        <div>
          <label>
            title:
            <input type="text" {...register("title")} />
            <ErrorMessage message={formState.errors.title?.message} />
          </label>
        </div>
        {/* <div> ✏️ ② </div> */}
      </fieldset>
      <hr />
      <button>submit</button>
      <ErrorMessage message={error} />
      <hr />
      <Link href="/">Back to Top</Link>
    </form>
  );
};

export const getServerSideProps = gssp<Props>(async ({ query }) => {
  // パスパラメーターの id を取得、数値として評価できるかを検証
  const { id } = z.object({ id: z.coerce.number() }).parse(query);
  // 📌:6-2 Postテーブルから ID が一致するレコードを取得
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) return { notFound: true };
  return { props: { post } };
});

export default Page;
