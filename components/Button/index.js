import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../static/styles/buttons.scss';

const Button = ({ text, primary, small, handleClick, href, newTab }) => {
  if (href) {
    return (
      <a
        href={href}
        target={newTab ? '_blank' : null}
        rel={newTab ? 'noopener noreferrer' : null}
        className={`${styles.container} ${primary ? styles.primary : null}`}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.container} ${primary ? styles.primary : null} ${
        small ? styles.small : null
      }`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  handleClick: PropTypes.func,
  href: PropTypes.string,
  newTab: PropTypes.bool,
};
Button.defaultProps = {};

export default Button;
