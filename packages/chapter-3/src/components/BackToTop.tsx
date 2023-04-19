import { useRouter } from "next/router";

export const BackToTop = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      TOP
    </button>
  );
};
