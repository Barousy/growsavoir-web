import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}