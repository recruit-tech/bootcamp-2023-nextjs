import { passwordRegExp } from "@/utils/regexp";
import { z } from "zod";

// 📌:5-5　入力フォームのバリデーションを行うスキーマ
export const loginInputSchema = z.object({
  email: z.string().email("メールアドレスの形式が正しくありません"),
  password: z
    .string()
    .regex(passwordRegExp, "パスワードの形式が正しくありません"),
});

export type LoginInputType = z.infer<typeof loginInputSchema>;
