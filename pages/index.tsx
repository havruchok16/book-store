import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="m-10">
      <Head>
        <title>Book store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mb-5 flex flex-row justify-center font-body">
        <Link href="/">
          <span className="font-bold cursor-pointer">Book Store</span>
        </Link>
      </div>
      <p className="text-center">Hi! This application contains many books. Choose your book.</p>
      <div className="my-8 flex flex-row justify-center font-body">
        <Link href="/books">
          <span className="font-bold text-lg cursor-pointer hover:text-fuchsia-800">Books</span>
        </Link>
      </div>
      <p className="my-14 text-sm text-center">&#169; Havruchok16.</p>
    </div>
  );
};

export default Home;
