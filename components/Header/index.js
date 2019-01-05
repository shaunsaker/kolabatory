import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

import Logo from '../Logo';

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo small />
    </div>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
