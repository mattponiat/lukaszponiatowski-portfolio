import type { NextPage } from "next";
import Head from "next/head";
//Components
import { HomePage } from "components/Home/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
