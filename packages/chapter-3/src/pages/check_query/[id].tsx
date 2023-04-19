import { BackToTop } from "@/components/BackToTop";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      {/* 📌:3-3 getServerSideProps　の export 有無で、router.query の出力結果が変わる */}
      <h1>router.query.id: {router.query.id}</h1>
      <BackToTop />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.query); // 📌:3-2 { id: '1' }
  return { props: {} };
};

export default Page;
