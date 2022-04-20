import type { AppProps } from "next/app";
//Styled-components
import { ThemeProvider } from "styled-components";
import { siteTheme } from "theme";
import GlobalStyles from "theme/GlobalStyles";
//Components
import Layout from "components-ui/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={siteTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
