import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { app } from '../../config';
import styles from './styles.scss';

import Page from '../../components/Page';
import Logo from '../../components/Logo';
import LineSeparator from '../../components/LineSeparator';
import Button from '../../components/Button';

const Home = () => {
  return (
    <Page>
      <Logo />

      <h3>
        Mobile, Web and Native App Development •{' '}
        <Link href="/shop">
          <span className={styles.link}>Shop</span>
        </Link>
      </h3>

      <LineSeparator />

      <Button text="Get in touch" href={`mailto:${app.primaryEmailAddress}`} />
    </Page>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
