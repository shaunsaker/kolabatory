import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { app, SEO } from '../../config';

const HeadComponent = () => {
  return (
    <Head>
      <title key="title">{SEO.title}</title>

      <meta key="description" name="description" content={SEO.description} />

      <meta key="og:url" property="og:url" content={SEO.openGraph.url} />

      <meta key="og:type" property="og:type" content={SEO.openGraph.type} />

      <meta key="og:title" property="og:title" content={SEO.openGraph.title} />

      <meta key="og:description" property="og:description" content={SEO.openGraph.description} />

      <meta key="og:image" property="og:image" content={SEO.openGraph.image} />

      <meta key="og:image:width" property="og:image:width" content={SEO.openGraph.imageWidth} />

      <meta key="og:image:height" property="og:image:height" content={SEO.openGraph.imageHeight} />

      <meta key="og:locale" property="og:locale" content={SEO.openGraph.locale} />

      <meta key="twitter:card" name="twitter:card" content={SEO.twitter.cardType} />

      <meta key="twitter:site" name="twitter:site" content={SEO.twitter.handle} />

      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0"
      />

      <meta key="theme-color" name="theme-color" content="#FFCA00" />

      <link rel="icon" type="image/x-icon" href="../../static/favicon.ico" />

      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${app.GATrackingID}`} />

      <script
        dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${app.GATrackingID}');`,
        }}
      />
    </Head>
  );
};

HeadComponent.propTypes = {};
HeadComponent.defaultProps = {};

export default HeadComponent;
