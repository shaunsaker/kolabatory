import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

import Button from '../Button';

const ProductCard = ({ product }) => {
  const { id, name, price } = product;
  const imageSrc = `/static/images/${id}/${id}-1.jpg`;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={name} className={styles.image} />
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.nameText}>{name}</h3>

          <h3 className={styles.priceText}>{`R${price}`}</h3>
        </div>

        <Button text="More Info" primary small />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
ProductCard.defaultProps = {};

export default ProductCard;
