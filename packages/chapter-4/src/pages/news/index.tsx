import Link from "next/link";

const Page = () => {
  return (
    <ul>
      <li>
        <Link href="/news/ssr">[📌:4-1] SSR</Link>
      </li>
      <li>
        <Link href="/news/ssg">[📌:4-2] SSG</Link>
      </li>
      <li>
        <Link href="/news/isr">[📌:4-3] ISR</Link>
      </li>
    </ul>
  );
};

export default Page;

// import loadsh from "lodash";
// loadsh.filter([1, 2, 3], (item) => item > 1);
