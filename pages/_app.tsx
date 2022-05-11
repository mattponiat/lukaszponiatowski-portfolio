import type { AppProps } from "next/app";
//Styled-components
import { ThemeProvider } from "styled-components";
import theme from "theme/theme";
import GlobalStyles from "theme/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
