import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Page = ({ dramatic, children }) => {
  return (
    <div className={`${styles.container} ${dramatic ? styles.dramatic : null}`}>{children}</div>
  );
};

Page.propTypes = {
  dramatic: PropTypes.bool,
  children: PropTypes.node,
};
Page.defaultProps = {};

export default Page;
