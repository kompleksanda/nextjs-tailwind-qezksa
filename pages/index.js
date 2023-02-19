import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="bg-slate-100 h-screen w-full">
        <div className="flex bg-white py-6 gap-x-3 justify-center">
          {['men', 'women', 'child'].map((item, i) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
}
