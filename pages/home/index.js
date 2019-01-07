import React from 'react';
import PropTypes from 'prop-types';

import { app } from '../../config';
import styles from './styles.scss';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Jumbotron from '../../components/Jumbotron';

const Home = () => {
  return (
    <Page dramatic>
      <Header transparent />

      <Jumbotron
        title="Innovation. Collaboration. Efficiency."
        description="These are the 3 pillars of Kolabatory. Have a new idea? Let's build it together. We'll help you develop a quality web, mobile or native app, blazingly fast and at a reasonable rate."
        buttonText="Get in touch"
        buttonHREF={`mailto:${app.primaryEmailAddress}`}
      />
    </Page>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
