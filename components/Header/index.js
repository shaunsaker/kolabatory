import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';

import { app } from '../../config';
import styles from './styles.scss';

import Logo from '../Logo';

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.setHasShadow = this.setHasShadow.bind(this);

    this.state = {
      hasShadow: false,
    };
  }

  static propTypes = {
    transparent: PropTypes.bool,
    router: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  };

  static defaultProps = {};

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrollY } = window;

    if (scrollY !== 0) {
      this.setHasShadow(true);
    } else {
      this.setHasShadow(false);
    }
  }

  setHasShadow(hasShadow) {
    this.setState({
      hasShadow,
    });
  }

  render() {
    const { hasShadow } = this.state;
    const { transparent, router } = this.props;
    const { pathname } = router;

    return (
      <div
        className={`${styles.container} ${hasShadow ? styles.shadow : null} ${
          transparent && !hasShadow ? styles.transparent : null
        }`}
      >
        <Logo small />

        <div className={styles.linksContainer}>
          <Link href="/shop" prefetch>
            <p
              className={`${styles.whiteText} ${styles.shopLinkText} ${
                pathname.indexOf('shop') > -1 ? styles.activeText : null
              }`}
            >
              Shop
            </p>
          </Link>

          <a
            href={`mailto:${app.emailAddress}`}
            className={`${styles.whiteText} ${styles.contactLinkText}`}
          >
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
