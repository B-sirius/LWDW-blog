import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

function MyDocument() {
    return (
        <Html>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/favicon/safari-pinned-tab.svg"
                    color="#ffffff"
                />
                <meta name="color-scheme" content="dark light" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#000" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://s2.loli.net/2023/01/18/42YTZxzePtR7jy9.png"
                />
                <meta property="og:url" content="https://b-sirius.github.io" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = async (
    ctx: DocumentContext
): Promise<DocumentInitialProps> => {
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
            styles: [initialProps.styles, sheet.getStyleElement()],
        };
    } finally {
        sheet.seal();
    }
};

export default MyDocument;
