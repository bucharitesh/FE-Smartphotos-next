import Document, { Head, Html, Main, NextScript } from 'next/document';
import { AppConfig } from '../utils/AppConfig';

// const GTM_KEY = "GTM-5VQVX3X"

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <meta property="og:title" content="Smartphotos"></meta>
          <meta property="og:site_name" content="Smartphotos"></meta>
          <meta property="og:url" content="https://smartphotos.xyz/"></meta>
          <meta
            property="og:description"
            content="Print your photos with SmartPhotos and turn into videos with great AR effects."
          ></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:image" content="/meta/opengraph.png"></meta>
          <link rel="apple-touch-icon" sizes="57x57" href="/meta/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/meta/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/meta/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/meta/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/meta/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/meta/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/meta/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/meta/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/meta/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/meta/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png" />
          <link rel="manifest" href="/meta/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff"></meta>
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></meta>
          <meta name="theme-color" content="#ffffff"></meta>
          {/* Tell the browser to never restore the scroll position on load */}
          <script
            dangerouslySetInnerHTML={{
              __html: `history.scrollRestoration = "manual"`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- Google Tag Manager (noscript) --> */}
          {/* <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_KEY}`}
              height="0"
              width="0"
            ></iframe>
          </noscript> */}
          {/* <!-- End Google Tag Manager (noscript) --> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
