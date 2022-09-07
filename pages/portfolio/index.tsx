import type { NextPageWithLayout } from "next";
import Head from "next/head";
//Components
import { PortfolioPage, Layout } from "@components";
//SRL
import SimpleReactLightbox from "simple-react-lightbox";
//Types
import { pageType } from "types";

const Portfolio: NextPageWithLayout = () => {
  return (
    <SimpleReactLightbox>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Przejrzyj kolekcję moich prac" />
        <meta property="og:title" content="Portfolio" />
        <meta
          property="og:description"
          content="Przejrzyj kolekcję moich prac"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lukaszponiatowski.pl/portfolio"
        />
        <meta
          property="og:image"
          content="https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/9.webp"
        />
        <meta property="og:image:alt" content="Banner image" />
      </Head>
      <PortfolioPage />
    </SimpleReactLightbox>
  );
};

Portfolio.getLayout = (page: pageType) => <Layout>{page}</Layout>;

export default Portfolio;
