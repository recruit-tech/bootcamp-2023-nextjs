// 📌:3-9
import type { NextApiHandler } from "next";
import nookies from "nookies";

type Data = {
  count: number;
};

const handler: NextApiHandler<Data> = (req, res) => {
  const cookies = nookies.get({ req });
  let count = +cookies.count || 0;
  count++;
  // cookie を更新
  nookies.set({ res }, "count", `${count}`, {
    maxAge: 10, // 10秒以内にリロードすると、count が増える
    path: "/",
  });
  res.status(200).json({ count });
};

export default handler;
