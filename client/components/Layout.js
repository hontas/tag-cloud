import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Footer from './footer/Footer.js';
import Header from './header/Header.js';

promiseFinally.shim();

const Layout = ({ children, title = 'Tag Cloud' }) => (
  <div className="app">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
    <style jsx>
      {`
        .app {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        header {
          padding: 1em;
        }
      `}
    </style>
    <style jsx global>
      {`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: slategray;
          height: 100%;
        }

        body {
          background-color: slategray;
          color: white;
          margin: 0;
          font-family: system-ui, sans-serif;
          line-height: 1.5;
          height: 100%;
        }

        #__next {
          height: 100%;
        }

        a {
          color: whitesmoke;
        }
      `}
    </style>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default Layout;
