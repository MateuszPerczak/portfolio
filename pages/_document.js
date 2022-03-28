import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="pl">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="preload"
          href="/fonts/Segoe Fluent Icons/Segoe Fluent Icons.ttf"
          as="font"
          crossOrigin=""
        />
        <meta name="description" content="Portfolio" />
        <meta name="author" content="Mateusz Perczak" />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/40388335?v=4"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
