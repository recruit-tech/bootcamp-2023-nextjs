import { ErrorMessage } from "@/components/ErrorMessage";
import { PasswordCaption } from "@/components/PasswordCaption";
import { postLogin } from "@/services/client/posts";
import { emailRegExp, passwordRegExp } from "@/utils/regexp";
import Link from "next/link";
import { useState } from "react";

function validate(value: string, regExp: RegExp, errorMessage: string) {
  const isValidValue = regExp.test(value);
  return [isValidValue, isValidValue ? undefined : errorMessage] as const;
}

const Page = () => {
  // 📌:5-3 フォームの入力値とエラーメッセージを管理する状態を用意する
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();
  // 通常版と React Hook Form 版の再描画頻度を比較してみる
  console.log("render");
  return (
    <form
      onSubmit={async (event) => {
        // 📌:5-4　バリデーションとログイン処理を試行する
        event.preventDefault();
        // 入力値のバリデーション
        const [isValidEmail, emailError] = validate(
          email,
          emailRegExp,
          "メールアドレスの形式が正しくありません"
        );
        const [isValidPassword, passwordError] = validate(
          password,
          passwordRegExp,
          "パスワードの形式が正しくありません"
        );
        const isValidInputs = isValidEmail && isValidPassword;
        // エラーメッセージの更新
        setEmailError(emailError);
        setPasswordError(passwordError);
        // バリデーションに成功したらログイン処理を実行する
        if (isValidInputs) {
          const { data, err } = await postLogin({ email, password });
          if (err) {
            console.log(err.message);
            return;
          }
          console.log(data.redirectUrl);
        }
      }}
    >
      <h1>通常版</h1>
      <fieldset style={{ padding: "16px" }}>
        <legend>ログイン</legend>
        <div>
          <label>
            email:
            <input
              type="email"
              value={email}
              onChange={(event) => {
                // 制御コンポーネント（このinput）の値を更新する
                setEmail(event.target.value);
              }}
            />
            <ErrorMessage message={emailError} />
          </label>
        </div>
        <div>
          <label>
            password:
            <input
              type="password"
              value={password}
              onChange={(event) => {
                // 制御コンポーネント（このinput）の値を更新する
                setPassword(event.target.value);
              }}
            />
            <ErrorMessage message={passwordError} />
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
