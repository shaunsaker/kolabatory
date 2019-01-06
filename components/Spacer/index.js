import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Spacer = ({ small, large }) => {
  // Adds vertical spacing
  return (
    <div className={`${styles.container} ${small && styles.small} ${large && styles.large} `} />
  );
};

Spacer.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
};
Spacer.defaultProps = {};

export default Spacer;
