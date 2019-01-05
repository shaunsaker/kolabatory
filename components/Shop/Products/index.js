import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { products } from '../../../config';
import styles from './styles.scss';

import LineSeparator from '../../../components/LineSeparator';

const Products = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.productsContainer}>
        {Object.keys(products).map((productID) => {
          const product = products[productID];
          const { name, price } = product;
          const imageSrc = `/static/images/${productID}/${productID}-1.jpg`;

          return (
            <Fragment key={productID}>
              <Link href={{ pathname: '/shop', query: { productID } }}>
                <li className={styles.productContainer}>
                  <img src={imageSrc} alt={name} className={styles.productImage} />

                  <div className={styles.footerContainer}>
                    <h3>{name}</h3>

                    <h3 className={styles.productPrice}>{`R${price}`}</h3>
                  </div>
                </li>
              </Link>

              <LineSeparator />
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

Products.propTypes = {};
Products.defaultProps = {};

export default Products;
