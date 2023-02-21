import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <section class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute bg-white/50 inset-0"></div>
        {[...Array(20)].map((_, i) => (
          <div>{i}</div>
        ))}
      </section>
    </>
  );
}
