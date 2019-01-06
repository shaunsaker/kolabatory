import React from 'react';
import PropTypes from 'prop-types';

import { app, products } from '../../../config';
import styles from './styles.scss';

import Spacer from '../../Spacer';
import LineSeparator from '../../LineSeparator';
import ImageSlider from '../../ImageSlider';
import Button from '../../Button';

const Product = ({ productID }) => {
  const product = products[productID];

  if (product) {
    const { name, price, description, specifications } = product;
    const imagesArr = Array.from({ length: product.numberOfImages });
    const images = imagesArr.map((_, index) => {
      return {
        src: `/static/images/${productID}/${productID}-${index + 1}.jpg`,
        alt: `${name} ${index + 1}`,
      };
    });

    return (
      <div className={styles.container}>
        <h1>{name}</h1>

        <div className={styles.lineSeparatorContainer}>
          <LineSeparator />
        </div>

        <ImageSlider images={images} />

        <Spacer />

        <h1>{`R${price}`}</h1>

        <Spacer />

        <div className={styles.buttonContainer}>
          <Button
            text="Place Order"
            primary
            href={`mailto:${
              app.primaryEmailAddress
            }?subject=Order: ${name}&body=Hello,%0D%0A%0D%0AI would like to place an order for the ${name}. %0D%0A%0D%0APlease get back to me with instructions.%0D%0A%0D%0AKind regards.`}
          />
        </div>

        <div className={styles.lineSeparatorContainer}>
          <LineSeparator />
        </div>

        <h4>Description</h4>

        <Spacer />

        <p>{description}</p>

        <div className={styles.lineSeparatorContainer}>
          <LineSeparator />
        </div>

        <h4>Specifications</h4>

        <Spacer />

        <ul>
          {specifications.map((spec) => {
            return (
              <li key={spec} className={styles.specItem}>
                {spec}
              </li>
            );
          })}
        </ul>

        <div className={styles.lineSeparatorContainer}>
          <LineSeparator />
        </div>

        <div className={styles.buttonContainer}>
          <Button
            text="Drivers"
            href="http://www.minihere.com/ar9271-150mbps-wireless-n-usb-wifi-adapter-pw-dn421-driver-download-for-windows-7810.html"
            newTab
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Product Not Found</h2>
    </div>
  );
};

Product.propTypes = { productID: PropTypes.string };
Product.defaultProps = {};

export default Product;
