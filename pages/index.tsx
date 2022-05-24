import { ReactChild, ReactFragment, ReactPortal } from "react";
import type { NextPageWithLayout } from "next";
import Head from "next/head";
//Components
import { HomePage, Layout } from "@components";

const Home: NextPageWithLayout = () => {
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

Home.getLayout = (
  page: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
) => <Layout>{page}</Layout>;

export default Home;
