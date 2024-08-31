"use client"
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function BlogPost() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  // const router = useRouter();
  // const { id } = pathname.query;
  return (
      <div>
        <p>Blog post {id}</p>
      </div>
    );
  }
