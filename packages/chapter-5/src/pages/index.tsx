import Link from "next/link";

const Page = () => {
  return (
    <ul>
      <li>
        <Link href="/zod">[📌:5-1, 📌:5-2] Zod</Link>
      </li>
      <li>
        <Link href="/login">[📌:5-3, 📌:5-4] 通常版フォーム</Link>
      </li>
      <li>
        <Link href="/login/rhf">
          [📌:5-5 〜 📌:5-9]React Hook Form 版フォーム
        </Link>
      </li>
    </ul>
  );
};

export default Page;
