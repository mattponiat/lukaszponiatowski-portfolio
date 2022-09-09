import type { NextPageWithLayout } from "next";
import Head from "next/head";

const Website: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Łukasz Poniatowski Fotografia</title>
        <meta
          name="description"
          content="Fotograf z Kalisza z wrażliwym podejściem do barw, oprawi wasze emocje w niebanalną kompozycję"
        />
        <meta property="og:title" content="Łukasz Poniatowski Fotografia" />
        <meta
          property="og:description"
          content="Fotograf z Kalisza z wrażliwym podejściem do barw, oprawi wasze emocje w niebanalną kompozycję"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lukaszponiatowski.pl/" />
        <meta
          property="og:image"
          content="https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/7.webp"
        />
        <meta property="og:image:alt" content="Banner image" />
        <meta httpEquiv="refresh" content="0;url=/home" />
      </Head>
    </>
  );
};

export default Website;
