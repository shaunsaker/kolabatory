import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { app } from '../../config';
import styles from './styles.scss';

import Logo from '../Logo';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.setHasShadow = this.setHasShadow.bind(this);

    this.state = {
      hasShadow: false,
    };
  }

  static propTypes = {};

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

    return (
      <div className={`${styles.container} ${hasShadow && styles.shadow}`}>
        <Logo small />

        <div className={styles.linksContainer}>
          <Link href="/shop">
            <p className={`${styles.whiteText} ${styles.shopLinkText}`}>Shop</p>
          </Link>

          <a
            href={`mailto:${app.primaryEmailAddress}`}
            className={`${styles.whiteText} ${styles.contactLinkText}`}
          >
            Contact
          </a>
        </div>
      </div>
    );
  }
}
