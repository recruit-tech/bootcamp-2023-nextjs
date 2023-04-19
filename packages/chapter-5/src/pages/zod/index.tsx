import Link from "next/link";
import { useState } from "react";
import { ZodError, z } from "zod";

const validate = (arg: unknown) => {
  // 📌:5-1　value は　５文字以内の文字列制約がある
  const schema = z.object({
    value: z.string().max(5, "5文字で入力してください"),
  });
  //　バリデーション対象のオブジェクト
  const obj = { value: arg };
  try {
    // const a = obj.value // const a: unknown
    // 📌:5-2 schema.parse で検証を実施。検証に失敗したらエラーを throw
    const data = schema.parse(obj);
    // 検証が通過した場合、型推論に反映される
    // const b = data.value; // const a: string
    console.log(`Valid: ${data.value}`);
  } catch (err) {
    if (err instanceof ZodError) {
      console.log(`Invalid: ${err.errors[0].message}`);
      return;
    }
    throw err;
  }
};

const Page = () => {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        validate(value);
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button>validate</button>
      <hr />
      <Link href="/">Back to Top</Link>
    </form>
  );
};

export default Page;
