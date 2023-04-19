import { failed } from "@/services/client/apiRoutes";
import type { Result } from "@/type";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { ZodError } from "zod";
import { isPrismaError } from "../prisma";

export function apiHandler<T>(callback: NextApiHandler<Result<T>>) {
  return async (req: NextApiRequest, res: NextApiResponse<Result<T>>) => {
    try {
      return await callback(req, res);
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json(failed({ message: "Invalid Request" }));
        return;
      }
      if (isPrismaError(err)) {
        res.status(400).json(failed({ message: err.message }));
        return;
      }
      res.status(500).json(failed({ message: "Internal Server Error" }));
    }
  };
}
