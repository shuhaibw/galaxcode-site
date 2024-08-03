import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
         <meta charSet="UTF-8" />
         <title>Galaxcode</title>
         <link rel="icon" href="astronaut.png" type="image/x-icon" />
         <meta name="google-site-verification" content="LGsc03sAbCKJE16EwcNL7DoJQkKZwvLT30O1HYwonCs" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
