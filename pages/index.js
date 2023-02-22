import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <time className="flex max-w-sm bg-white items-center gap-2 shadow-sm px-2">
          <span>2022</span>
          <span className="h-px bg-black flex-1"></span>
          <span>Oct 10</span>
        </time>
      </div>
    </>
  );
}
