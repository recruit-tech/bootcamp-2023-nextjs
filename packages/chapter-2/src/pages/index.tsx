import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <div>
      <h1>TOP</h1>
      <Image
        src="/next.svg"
        alt="Next.js" // 📌:2-6
        width={100}
        height={24}
        className="logo"
      />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {/* 📌:2-2 */}
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog/hello-world">Blog Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default Page; // 📌:2-1
