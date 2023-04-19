import { ErrorMessage } from "@/components/ErrorMessage";
import { createPostInputSchema, CreatePostInputSchemaType } from "@/lib/zod";
import { createPost } from "@/services/client/posts";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const router = useRouter();
  const [error, setError] = useState<string>();
  const { handleSubmit, register, formState } =
    useForm<CreatePostInputSchemaType>({
      resolver: zodResolver(createPostInputSchema),
    });
  return (
    <form
      onSubmit={handleSubmit(async (values) => {
        const { data, err } = await createPost(values);
        if (err) {
          setError(err.message);
          return;
        }
        router.push(`/posts/${data.id}`);
      })}
    >
      <fieldset style={{ padding: "16px" }}>
        <legend>記事を書く</legend>
        <div>
          <label>
            title:
            <input type="text" {...register("title")} />
            <ErrorMessage message={formState.errors.title?.message} />
          </label>
        </div>
        {/* <div> ✏️ ① </div> */}
      </fieldset>
      <hr />
      <button>submit</button>
      <ErrorMessage message={error} />
      <hr />
      <Link href="/">Back to Top</Link>
    </form>
  );
};

export default Page;
