import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#000" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://s2.loli.net/2023/01/18/42YTZxzePtR7jy9.png" />
                <meta property="og:url" content="https://b-sirius.github.io" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}