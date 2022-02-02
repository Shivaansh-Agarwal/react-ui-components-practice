import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="A Webapp to host all my practice UI Components built in React."
        />
      </Head>
      <div className="fixed top-0 left-0 right-0 z-10 px-8 sm:px-24 lg:px-60 flex items-center h-20 sm:h-16 border drop-shadow-md bg-white">
        <Link href="/">
          <a className="font-mono text-lg font-bold">React UI components</a>
        </Link>
      </div>
      <main className="pt-24 px-8 sm:px-24 lg:px-60 h-screen bg-gradient-to-r from-cyan-100 to-pink-200 font-sans">
        {children}
      </main>
    </>
  );
}
