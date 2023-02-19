import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="bg-slate-100 h-screen w-full">
        <div className="fixed inset-x-4 bottom-4 flex justify-between bg-green-500 p-2 text-slate-100 font-medium items-center">
          <p>
            I am happy{' '}
            <a href="#" className="underline">
              for now
            </a>
          </p>
          <button
            aria-label="Close"
            className="backdrop-brightness-90 p-1 rounded-lg hover:backdrop-brightness-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 fill-green-200"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
