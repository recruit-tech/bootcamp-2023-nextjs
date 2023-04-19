import type { NextApiHandler } from "next";

export type Succeed<T> = {
  data: T;
  err: null;
};

export type Failed = {
  data: null;
  err: { message: string };
};

export type Result<T> = Succeed<T> | Failed;

export type ApiHandler<T = unknown> = NextApiHandler<Result<T>>;
