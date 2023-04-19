import Link from "next/link";

const Page = () => {
  return (
    <ul>
      <li>
        <Link href="/news/ssr">[📌:4-1] SSR</Link>
      </li>
      <li>
        <Link href="/news/ssg">[📌:4-3] SSG</Link>
      </li>
      <li>
        <Link href="/news/isr">[📌:4-5] ISR</Link>
      </li>
    </ul>
  );
};

export default Page;
