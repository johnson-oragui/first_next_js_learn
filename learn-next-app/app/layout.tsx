import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className='bg-slate-900 p-8'>
          <ul className='inline-flex space-x-10 text-xl text-blue-700'>
            <li className='hover:underline'>
            <Link href='/products'>products</Link>
            </li>
            <li className='hover:underline'>
            <Link href='/blogs'>blogs</Link>
            </li>
          </ul>
        </header>
        <main className='flex-grow'>{children}</main>
        <footer className='bg-orange-500 py-8 pl-6'>
          <p>© 2024 Johnson</p>
        </footer>
      </body>
    </html>
  );
}
