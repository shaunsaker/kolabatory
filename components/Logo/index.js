import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles.scss';

const Logo = ({ small, secondary }) => {
  return (
    <Link href="/">
      <img
        src={`/static/images/logo-${secondary ? 'secondary' : 'primary'}.svg`}
        alt="Kolabatory logo"
        className={`${styles.image} ${small ? styles.small : null}`}
      />
    </Link>
  );
};

Logo.propTypes = {
  small: PropTypes.bool,
  secondary: PropTypes.bool,
};
Logo.defaultProps = {};

export default Logo;
