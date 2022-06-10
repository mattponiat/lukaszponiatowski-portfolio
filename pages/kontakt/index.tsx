import { ReactChild, ReactFragment, ReactPortal } from "react";
import type { NextPageWithLayout } from "next";
import Head from "next/head";
//Components
import { ContactPage, Layout } from "@components";

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kontakt</title>
      </Head>
      <ContactPage />
    </>
  );
};

Contact.getLayout = (
  page: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
) => <Layout>{page}</Layout>;

export default Contact;
