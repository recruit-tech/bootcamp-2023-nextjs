import { BackToTop } from "@/components/BackToTop";
import { GetServerSideProps } from "next";
import nookies from "nookies";

type Props = {
  count: number;
};

const Page = ({ count }: Props) => {
  return (
    <div>
      <h1>count: {count}</h1>
      <BackToTop />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  res,
}) => {
  // 📌:3-4 req から cookie を取得
  const cookies = nookies.get({ req });
  let count = +cookies.count || 0;
  count++;
  // cookie を更新
  nookies.set({ res }, "count", `${count}`, {
    maxAge: 10, // 10秒以内にリロードすると、count が増える
    path: "/",
  });
  return { props: { count } };
};

export default Page;
