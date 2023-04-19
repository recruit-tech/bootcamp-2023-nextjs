import { apiHandler } from "@/lib/next/apiRoutes";
import { createPostInputSchema } from "@/lib/zod";
import { Post, prisma } from "@/prisma";
import { succeed } from "@/services/client/apiRoutes";
import type { ApiHandler } from "@/type";
import { z } from "zod";

export type CreatePostInput = z.infer<typeof createPostInputSchema>;
export type CreatePostResponse = Post;

const handlePost = apiHandler<CreatePostResponse>(async (req, res) => {
  const data = createPostInputSchema.parse(req.body);
  const result = await prisma.post.create({ data });
  res.status(201).json(succeed(result));
});

const handler: ApiHandler = (req, res) => {
  switch (req.method) {
    case "POST":
      return handlePost(req, res);
    default:
      res.status(405).end();
      return;
  }
};

export default handler;
