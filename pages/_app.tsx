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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
