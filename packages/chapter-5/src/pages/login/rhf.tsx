import { ErrorMessage } from "@/components/ErrorMessage";
import { PasswordCaption } from "@/components/PasswordCaption";
import { loginInputSchema, LoginInputType } from "@/lib/zod";
import { postLogin } from "@/services/client/posts";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Page = () => {
  const { handleSubmit, register, formState } = useForm<LoginInputType>({
    // 📌:5-6 Zodのスキーマを指定する
    resolver: zodResolver(loginInputSchema),
  });
  // 通常版と React Hook Form 版の再描画頻度を比較してみる
  console.log("render");
  return (
    <form
      onSubmit={handleSubmit(async (values) => {
        // 📌:5-8 バリデーションに成功したらログイン処理を実行する
        const { data, err } = await postLogin(values);
        if (err) {
          console.log(err.message);
          return;
        }
        console.log(data);
      })}
    >
      <h1>React Hook Form 版</h1>
      <fieldset style={{ padding: "16px" }}>
        <legend>ログイン</legend>
        <div>
          <label>
            email:
            {/* 📌:5-7 register, formState　を使用した入力要素を設置 */}
            <input type="email" {...register("email")} />
            <ErrorMessage message={formState.errors.email?.message} />
          </label>
        </div>
        <div>
          <label>
            password:
            <input type="password" {...register("password")} />
            <ErrorMessage message={formState.errors.password?.message} />
            <PasswordCaption />
          </label>
        </div>
      </fieldset>
      <button>submit</button>
      <hr />
      <Link href="/">Back to Top</Link>
    </form>
  );
};

export default Page;
