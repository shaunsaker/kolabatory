import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Page = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node,
};
Page.defaultProps = {};

export default Page;
