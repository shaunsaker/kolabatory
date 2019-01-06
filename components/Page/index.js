import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Page = ({ black, children }) => {
  return <div className={`${styles.container} ${black && styles.black}`}>{children}</div>;
};

Page.propTypes = {
  black: PropTypes.bool,
  children: PropTypes.node,
};
Page.defaultProps = {};

export default Page;
