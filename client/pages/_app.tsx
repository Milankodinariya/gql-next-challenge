import React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import Router from 'next/router';
// @ts-ignore
import withGA from 'next-ga';

function MyApp(props: AppProps) {
  const {Component, pageProps} = props;

  return (
    <React.Fragment>
      <Head>
        <title>gql-next-challenge</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default withGA('UA-180502649-1', Router)(MyApp);
