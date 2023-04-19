import { BackToTop } from "@/components/BackToTop";
import { GetServerSideProps } from "next";

type Props = {
  value?: string;
};

const Page = ({ value }: Props) => {
  return (
    <div>
      <h1>props.value: {value}</h1>
      <BackToTop />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // 📌:3-6 環境変数は gSSP 内でデータ取得のために使用する
  // gSSP で取得した環境変数は、props を経由するとフロントでも参照できてしまう。 -> やってはダメ
  return { props: { value: process.env.MY_SECRET_VAR } };
};

export default Page;
