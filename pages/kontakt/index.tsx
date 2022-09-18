import type { NextPageWithLayout } from "next";
import Head from "next/head";
//Components
import { ContactPage, Layout, Facebook } from "@components";
//Types
import { pageType } from "types";

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Kontakt</title>
        <meta name="description" content="Skontaktuj się ze mną" />
        <meta property="og:title" content="Kontakt" />
        <meta property="og:description" content="Skontaktuj się ze mną" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lukaszponiatowski.pl/kontakt"
        />
        <meta
          property="og:image"
          content="https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/ImgGallery/7.webp"
        />
        <meta property="og:image:alt" content="Banner image" />
      </Head>
      <ContactPage />
      <Facebook />
    </>
  );
};

Contact.getLayout = (page: pageType) => <Layout>{page}</Layout>;

export default Contact;
