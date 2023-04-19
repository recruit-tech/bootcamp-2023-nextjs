import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ZodError } from "zod";
import { isPrismaError } from "../prisma";

export function gssp<T extends { [key: string]: unknown }>(
  callback: GetServerSideProps<T>
) {
  return async (ctx: GetServerSidePropsContext) => {
    try {
      return await callback(ctx);
    } catch (err) {
      if (err instanceof ZodError || isPrismaError(err)) {
        console.log(err.message);
        return { notFound: true };
      }
      throw err;
    }
  };
}
