import Link from "next/link";

const Page = () => {
  return (
    <ul>
      <li>
        <Link href="/now">[📌:3-1] now</Link>
      </li>
      <li>
        <Link href="/check_query/1">[📌:3-2, 📌:3-3] check_query</Link>
      </li>
      <li>
        <Link href="/check_cookie">[📌:3-4] check_cookie</Link>
      </li>
      <li>
        <Link href="/check_env_in_gssp">[📌:3-6] check_env_in_gssp</Link>
      </li>
      <li>
        <Link href="/check_env_in_component">
          [📌:3-7] check_env_in_component
        </Link>
      </li>
    </ul>
  );
};

export default Page;
