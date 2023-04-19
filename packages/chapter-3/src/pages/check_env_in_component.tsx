import { BackToTop } from "@/components/BackToTop";

const Page = () => {
  return (
    <div>
      {/* "NEXT_PUBLIC_"接頭辞付きの環境変数はサーバーでもフロントでも参照できる */}
      <h1>NEXT_PUBLIC_VAR: {process.env.NEXT_PUBLIC_VAR}</h1>

      {/* "NEXT_PUBLIC_"接頭辞無しの環境変数はサーバーでは参照できるが、フロントでは直接参照できない */}
      {/* 📌:3-7 サーバーレンダリングと CSR が異なるため Hydration Error が発生する */}
      {/* <h1>MY_SECRET_VAR: {process.env.MY_SECRET_VAR}</h1> */}
      <BackToTop />
    </div>
  );
};

export default Page;
