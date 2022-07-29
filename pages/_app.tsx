import type { AppProps } from "next/app";
//Styled-components
import { ThemeProvider } from "styled-components";
import theme from "theme/theme";
import GlobalStyles from "theme/GlobalStyles";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <meta name="author" content="Łukasz Poniatowski" />
        <meta
          name="keywords"
          content="lukasz, łukasz, poniatowski, lukasz poniatowski, łukasz poniatowski, fotografia, photography, portfolio, photographer, fotograf, kalisz, fotograf kalisz, fotograf ślubny, fotograf ślubny kalisz"
        />
        <meta
          name="description"
          content="Fotograf z Kalisza z wrażliwym podejściem do barw, oprawi wasze emocje w niebanalną kompozycję"
        />
        <meta name="robots" content="index, follow" />
        <title>Łukasz Poniatowski Photography</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
