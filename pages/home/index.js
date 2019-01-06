import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import LineSeparator from '../../components/LineSeparator';

const Home = () => {
  return (
    <Page black>
      <Header />

      <Logo />

      <LineSeparator />

      <h3 className={styles.whiteText}>Mobile, Web and Native App Development</h3>
    </Page>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
