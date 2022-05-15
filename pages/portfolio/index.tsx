import { ReactChild, ReactFragment, ReactPortal } from "react";
import type { NextPageWithLayout } from "next";
import Head from "next/head";
//Components
import { PortfolioPage, FooterLayout } from "@components";
//SRL
import SimpleReactLightbox from "simple-react-lightbox";

const Portfolio: NextPageWithLayout = () => {
  return (
    <SimpleReactLightbox>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home</title>
      </Head>
      <PortfolioPage />
    </SimpleReactLightbox>
  );
};

Portfolio.getLayout = (
  page: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
) => <FooterLayout>{page}</FooterLayout>;

export default Portfolio;
