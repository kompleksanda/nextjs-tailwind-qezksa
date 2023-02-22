import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <time className="flex h-1/2 max-w-sm bg-white items-center gap-2 shadow-sm p-2 rotate-180 [writing-mode:vertical-lr]">
          <span>2022</span>
          <span className="h-px w-px bg-black flex-1"></span>
          <span>Oct 10</span>
        </time>
      </div>
    </>
  );
}
