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
      <Html lang="pl-PL">
        <Head>
          <meta lang="pl-PL" />
          <meta name="author" content="Łukasz Poniatowski" />
          <meta
            name="keywords"
            content="lukasz, łukasz, poniatowski, lukasz poniatowski, łukasz poniatowski, fotografia, photography, portfolio, photographer, fotograf, kalisz, fotograf kalisz, fotograf ślubny, fotograf ślubny kalisz"
          />
          <meta name="robots" content="index, follow" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <script
            data-partytown-config
            dangerouslySetInnerHTML={{
              __html: `
          partytown = {
            lib: "/_next/static/~partytown/",
            forward: ["gtag"]           
          };
        `,
            }}
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
