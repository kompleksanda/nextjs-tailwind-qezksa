import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="bg-slate-100 h-screen w-full">
        <div className="flex bg-white p-2 justify-between">
          <div className="bg-slate-100 h-12 w-12"></div>
          <div className="flex bg-slate-100 h-12 w-12"></div>
          <div className="flex bg-slate-100 h-12 w-12"></div>
        </div>
      </div>
    </>
  );
}
