import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated: boolean;
  accessedAt: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const accessedAt = new Date().toISOString();
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ revalidated: false, accessedAt });
  }
  try {
    // 📌:4-12
    await res.revalidate(`/news/ssg/${req.query.id}`);
    return res.json({ revalidated: true, accessedAt });
  } catch (err) {
    return res.status(500).json({ revalidated: false, accessedAt });
  }
}
