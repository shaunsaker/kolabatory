import React from 'react';
import PropTypes from 'prop-types';
import { MdClose as CloseIcon } from 'react-icons/md';

import { products } from '../../../../config';
import styles from './styles.scss';
import buttonStyles from '../../../../static/styles/buttons.scss';

import LineSeparator from '../../../../components/LineSeparator';

const OrderFormModal = ({ productID, handleClose }) => {
  const product = products[productID];
  const { name } = product;

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.blackText}>Order Form</h1>

        <h2 className={styles.blackText}>{name}</h2>

        <LineSeparator />

        <form
          name="order"
          method="POST"
          data-netlify="true"
          action={`/shop?productID=${productID}`}
          className={styles.form}
        >
          <div className={styles.inputContainer}>
            <label htmlFor="name">Your Name</label>

            <input type="text" name="name" required />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="email">Email address</label>

            <input type="email" name="email" required />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="phone">Phone</label>

            <input type="tel" name="phone" required />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="address">Physical Address</label>

            <input type="text" name="address" required />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="quantity">Quantity</label>

            <input type="number" name="quantity" min="1" required />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="delivery">Delivery</label>

            <select name="delivery">
              <option value="collect-table-view">Collect in Table View - Free</option>

              <option value="collect-observatory">Collect in Observatory - Free</option>

              <option value="postnet">Postnet to Postnet - R99</option>

              <option value="courier">Courier - Roughly R150 (TBC)</option>
            </select>
          </div>

          <button type="submit" className={`${buttonStyles.container} ${buttonStyles.primary}`}>
            Send
          </button>
        </form>

        <button type="button" onClick={handleClose} className={styles.closeIconContainer}>
          <CloseIcon className={styles.closeIcon} />
        </button>
      </div>
    </div>
  );
};

OrderFormModal.propTypes = {
  productID: PropTypes.string.isRequired,
  handleClose: PropTypes.func,
};
OrderFormModal.defaultProps = {};

export default OrderFormModal;
