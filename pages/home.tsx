import type { NextPageWithLayout } from "next";
import Head from "next/head";
//Components
import { HomePage, Layout } from "@components";
//Types
import { pageType } from "types";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Fotograf z Kalisza z wrażliwym podejściem do barw, oprawi wasze emocje w niebanalną kompozycję"
        />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="Fotograf z Kalisza z wrażliwym podejściem do barw, oprawi wasze emocje w niebanalną kompozycję"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lukaszponiatowski.pl/home" />
        <meta
          property="og:image"
          content="https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/9.webp"
        />
        <meta property="og:image:alt" content="Banner image" />
      </Head>
      <HomePage />
    </>
  );
};

Home.getLayout = (page: pageType) => <Layout>{page}</Layout>;

export default Home;
