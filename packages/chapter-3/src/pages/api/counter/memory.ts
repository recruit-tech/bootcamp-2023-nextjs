// 📌:3-8
import type { NextApiHandler } from "next";

type Data = {
  count: number;
};

// devサーバーでは、保存のたびにリセットされる
let count = 0;

const handler: NextApiHandler<Data> = (_, res) => {
  count++;
  res.status(200).json({ count });
};

export default handler;
