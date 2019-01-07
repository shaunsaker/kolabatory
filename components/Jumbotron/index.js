import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

import LineSeparator from '../LineSeparator';
import Spacer from '../Spacer';
import Button from '../Button';

const Jumbotron = ({ title, description, buttonText, buttonHREF }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleText}>{title}</h1>

      <LineSeparator />

      <h3 className={styles.descriptionText}>{description}</h3>

      <Spacer />

      <Button text={buttonText} href={buttonHREF} />
    </div>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHREF: PropTypes.string,
};
Jumbotron.defaultProps = {};

export default Jumbotron;
