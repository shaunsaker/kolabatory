import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { products } from '../../../config';
import styles from './styles.scss';

import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.productsContainer}>
        {Object.keys(products).map((productID) => {
          const product = products[productID];

          return (
            <Link key={productID} href={{ pathname: '/shop', query: { productID } }}>
              <li className={styles.productCardContainer}>
                <ProductCard product={product} />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

Products.propTypes = {};
Products.defaultProps = {};

export default Products;
