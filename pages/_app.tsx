import type { AppProps } from "next/app";
//Styled-components
import { ThemeProvider } from "styled-components";
import { siteTheme } from "theme";
import GlobalStyles from "GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={siteTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
