import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { app } from '../../config';

const HeadComponent = () => {
  // TODO: Only inject script in dev

  return (
    <Head>
      <title>Kolabatory</title>

      <meta name="Description" content="Mobile, Web and Native App Development" key="description" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0"
        key="viewport"
      />

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
