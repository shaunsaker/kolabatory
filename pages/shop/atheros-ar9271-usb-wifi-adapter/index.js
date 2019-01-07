import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { products } from '../../../config';
import styles from './styles.scss';

import Page from '../../../components/Page';
import Header from '../../../components/Header';
import Product from '../../../layouts/Product';
import LineSeparator from '../../../components/LineSeparator';
import Button from '../../../components/Button';

const Atheros = () => {
  const productID = 'atheros-ar9271-usb-wifi-adapter';
  const product = products[productID];
  const { name } = product;

  return (
    <Page dramatic>
      <Head>
        <title key="title">Kolabatory | {name}</title>

        <description key="description">
          Buy an Atheros AR9271 USB WiFi adapter in South Africa
        </description>
      </Head>

      <Header transparent />

      <Product productID={productID}>
        <div className={styles.contentContainer}>
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
      </Product>
    </Page>
  );
};

Atheros.propTypes = {};
Atheros.defaultProps = {};

export default Atheros;
