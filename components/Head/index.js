import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const HeadComponent = () => {
  return (
    <Head>
      <title>Kolabatory | Technology</title>

      <meta name="Description" content="Mobile, Web and Native App Development" key="description" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0"
        key="viewport"
      />

      <link rel="icon" type="image/x-icon" href="../../static/favicon.ico" />
    </Head>
  );
};

HeadComponent.propTypes = {};
HeadComponent.defaultProps = {};

export default HeadComponent;
