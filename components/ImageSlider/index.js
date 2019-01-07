import React from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft as LeftArrowIcon, MdChevronRight as RightArrowIcon } from 'react-icons/md';

import styles from './styles.scss';

import Spacer from '../Spacer';

export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.setImageIndex = this.setImageIndex.bind(this);

    this.state = {
      imageIndex: 0,
    };
  }

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })),
  };

  static defaultProps = {};

  setImageIndex(imageIndex) {
    this.setState({
      imageIndex,
    });
  }

  render() {
    const { imageIndex } = this.state;
    const { images } = this.props;
    const isLeftArrowIconContainerDisabled = imageIndex === 0;
    const isRightArrowIconContainerDisabled = imageIndex === images.length - 1;
    const slideWidth = 220;

    return (
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <button
            type="button"
            className={`${styles.iconContainer} ${styles.leftArrowIconContainer} ${
              isLeftArrowIconContainerDisabled ? styles.disabledIconContainer : null
            }`}
            onClick={() => this.setImageIndex(imageIndex - 1)}
            disabled={isLeftArrowIconContainerDisabled}
          >
            <LeftArrowIcon className={styles.icon} />
          </button>

          <div
            style={{ width: slideWidth, transform: `translateX(-${slideWidth * imageIndex}px)` }}
            className={styles.slidesContainer}
          >
            {images.map((image) => {
              return (
                <div key={image.src} className={styles.slideContainer}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={styles.image}
                    style={{ width: slideWidth }}
                  />
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className={`${styles.iconContainer} ${styles.rightArrowIconContainer} ${
              isRightArrowIconContainerDisabled ? styles.disabledIconContainer : null
            }`}
            onClick={() => this.setImageIndex(imageIndex + 1)}
            disabled={isRightArrowIconContainerDisabled}
          >
            <RightArrowIcon className={styles.icon} />
          </button>
        </div>

        <Spacer />

        <div className={styles.bulletsContainer}>
          {images.map((image, index) => {
            return (
              <div key={image.src} className={styles.bulletContainer}>
                <button
                  type="button"
                  className={`${styles.bullet} ${
                    imageIndex === index ? styles.activeBullet : null
                  }`}
                  onClick={() => this.setImageIndex(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
