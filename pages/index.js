import Head from 'next/head';
const listt = ['men', 'women', 'child'];
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="bg-slate-100 h-screen w-full">
        <div className="flex bg-white py-6 gap-x-3 justify-center">
          {listt.map((item, i) => {
            <div>{item}</div>;
          })}
        </div>
      </div>
    </>
  );
}
