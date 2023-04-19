import { z } from "zod";

export const createPostInputSchema = z.object({
  title: z.string(),
  // ✏️ ①
});

export const updatePostInputSchema = z.object({
  title: z.string(),
  // ✏️ ②
});

export type CreatePostInputSchemaType = z.infer<typeof createPostInputSchema>;
export type UpdatePostInputSchemaType = z.infer<typeof updatePostInputSchema>;
