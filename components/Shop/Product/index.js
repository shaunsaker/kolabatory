import React from 'react';
import PropTypes from 'prop-types';

import { products } from '../../../config';
import styles from './styles.scss';

import LineSeparator from '../../LineSeparator';
import Spacer from '../../Spacer';
import Button from '../../Button';
import OrderFormModal from './OrderFormModal';

export default class Product extends React.Component {
  constructor(props) {
    super(props);

    this.toggleShowOrderFormModal = this.toggleShowOrderFormModal.bind(this);

    this.state = {
      showOrderFormModal: false,
    };
  }

  static propTypes = {
    productID: PropTypes.string,
  };

  static defaultProps = {};

  toggleShowOrderFormModal() {
    const { showOrderFormModal } = this.state;

    this.setState({
      showOrderFormModal: !showOrderFormModal,
    });
  }

  render() {
    const { showOrderFormModal } = this.state;
    const { productID } = this.props;
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
      const orderFormModalComponent = showOrderFormModal && (
        <OrderFormModal productID={productID} handleClose={this.toggleShowOrderFormModal} />
      );

      return (
        <div className={styles.container}>
          <Spacer />

          <h1>{name}</h1>

          <div className={styles.lineSeparatorContainer}>
            <LineSeparator />
          </div>

          <ul className={styles.imagesContainer}>
            {images.map((image) => {
              return (
                <li key={image.src} className={styles.imageContainer}>
                  <img src={image.src} alt={image.alt} className={styles.image} />
                </li>
              );
            })}
          </ul>

          <Spacer />

          <h1>{`R${price}`}</h1>

          <Spacer />

          <div className={styles.buttonContainer}>
            <Button text="Place Order" primary handleClick={this.toggleShowOrderFormModal} />
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

          {orderFormModalComponent}
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <h2>Product Not Found</h2>
      </div>
    );
  }
}
