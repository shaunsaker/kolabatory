import React from 'react';
import PropTypes from 'prop-types';

import config from '../../config';
import styles from './styles.scss';

import Page from '../../components/Page';

const Home = () => {
  return (
    <Page>
      <div className={styles.container}>
        <img src="/static/images/logo-primary.svg" alt="Kolabatory logo" className={styles.logo} />

        <h3 className={styles.whiteText}>Mobile, Web and Native App Development</h3>

        <div className={styles.line} />

        <h4 className={styles.whiteText}>Get in touch:</h4>

        <a href={`mailto:${config.primaryEmailAddress}`}>{config.primaryEmailAddress}</a>
      </div>
    </Page>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
