import { loginInputSchema } from "@/lib/zod";
import { failed, succeed } from "@/services/client/apiRoutes";
import type { ApiHandler } from "@/type";
import { ZodError, z } from "zod";

export type PostLoginInput = z.infer<typeof loginInputSchema>;
export type PostLoginResponse = { redirectUrl: string };

const handlePost: ApiHandler<PostLoginResponse> = async (req, res) => {
  try {
    // 📌:5-9　API Routes 側でもバリデーションを行う
    const payload = loginInputSchema.parse(req.body);
    res.status(200).json(succeed({ redirectUrl: "/path/to/page", payload }));
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json(failed({ message: "Invalid Request" }));
      return;
    }
    res.status(500).json(failed({ message: "Internal Server Error" }));
  }
};

const handler: ApiHandler = (req, res) => {
  // メソッドの分岐は req.method で行う
  switch (req.method) {
    case "POST":
      return handlePost(req, res);
    default:
      res.status(405).end();
      return;
  }
};

export default handler;
