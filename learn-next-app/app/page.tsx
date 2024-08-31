import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href='/products'>products</Link> <br />
      <Link href='/blogs'>blogs</Link>
    </main>
  );
}
