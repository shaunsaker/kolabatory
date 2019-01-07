import React from 'react';
import App, { Container } from 'next/app';

import '../static/styles/global.scss';

import Head from '../components/Head';

export class Kolabatory extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Head />

        <Component />
      </Container>
    );
  }
}

export default Kolabatory;
