import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

import { products } from '../../config';
import styles from './styles.scss';

import Page from '../../components/Page';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';

const Shop = () => {
  return (
    <Page dramatic>
      <Header transparent />

      <div className={styles.container}>
        <ul className={styles.productsContainer}>
          {Object.keys(products).map((productID) => {
            const product = products[productID];

            return (
              <Link key={productID} href={`/shop/${productID}`} prefetch>
                <li className={styles.productCardContainer}>
                  <ProductCard product={product} />
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
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
