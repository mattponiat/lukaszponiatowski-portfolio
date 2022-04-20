import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta lang="en"></meta>
          <link
            rel="preload"
            href="/fonts/NunitoSans/NunitoSans-ExtraLight.ttf"
            as="font"
          />
          <link
            rel="preload"
            href="/fonts/NunitoSans/NunitoSans-Light.ttf"
            as="font"
          />
          <link
            rel="preload"
            href="/fonts/NunitoSans/NunitoSans-Regular.ttf"
            as="font"
          />
          <link
            rel="preload"
            href="/fonts/NunitoSans/NunitoSans-SemiBold.ttf"
            as="font"
          />
          <link
            rel="preload"
            href="/fonts/NunitoSans/NunitoSans-Bold.ttf"
            as="font"
          />
          <link
            rel="preload"
            href="/fonts/NunitoSans/NunitoSans-ExtraBold.ttf"
            as="font"
          />
          <link
            rel="preload"
            href="/fonts/NunitoSans/NunitoSans-Black.ttf"
            as="font"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
