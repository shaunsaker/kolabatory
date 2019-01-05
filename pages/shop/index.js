import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

import styles from './styles.scss';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Product from './Product';
import Products from './Products';

const Shop = ({ router }) => {
  const { query } = router;
  const { productID } = query;
  let productComponent;

  if (productID) {
    productComponent = <Product productID={productID} />;
  } else {
    productComponent = <Products />;
  }

  return (
    <Page>
      <Header />

      <Link href="/shop">
        <h1 className={styles.link}>Shop</h1>
      </Link>

      {productComponent}
    </Page>
  );
};

Shop.propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape({
      productID: PropTypes.string,
    }),
  }),
};
Shop.defaultProps = {};

export default withRouter(Shop);
