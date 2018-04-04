import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Head from 'next/head';
import promiseFinally from 'promise.prototype.finally';

import Footer from './footer/Footer.js';
import Header from './header/Header.js';

promiseFinally.shim();

const Layout = ({ className, children, title = 'Tag Cloud' }) => (
  <div className={classNames('Layout', className)}>
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
        .Layout {
          display: flex;
          flex-direction: column;
          height: 100%;
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
          color: inherit;
        }

        .strikethrough {
          text-decoration: line-through;
        }
      `}
    </style>
  </div>
);

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  title: PropTypes.string,
};

export default Layout;
