import { Html, Head, Main, NextScript } from "next/document";
import Meta from "@/components/meta";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Meta />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
