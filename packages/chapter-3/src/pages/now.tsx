import { BackToTop } from "@/components/BackToTop";
import { GetServerSideProps } from "next";

type Props = {
  value: string;
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
  const value = new Date().toISOString();
  console.log(value); // 📌:3-1 アクセス時刻がサーバーログに出力される
  return { props: { value } };
};

export default Page;
