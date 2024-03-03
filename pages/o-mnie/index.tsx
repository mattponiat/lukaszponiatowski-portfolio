import { AboutMePage, Layout } from "@components";
import { NextPageWithLayout } from "next";
import Head from "next/head";
import { pageType } from "types";

const AboutMe: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>O mnie</title>
        <meta
          name="description"
          content="Nazywam się Łukasz Poniatowski, realizuję zlecenia fotograficzne na terenie całej Polski."
        />
        <meta property="og:title" content="O mnie" />
        <meta
          property="og:description"
          content="Nazywam się Łukasz Poniatowski, realizuję zlecenia fotograficzne na terenie całej Polski."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lukaszponiatowski.pl/o_mnie" />
      </Head>
      <AboutMePage />
    </>
  );
};

AboutMe.getLayout = (page: pageType) => <Layout>{page}</Layout>;

export default AboutMe;
