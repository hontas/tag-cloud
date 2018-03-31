import React from 'react';

export default () => (
  <footer>
    <a href="mailto:lundin.pontus@gmail.com">lundin.pontus@gmail.com</a>
    <a href="tel:+46735133879">+46735133879</a>
    <style jsx>
      {`
        footer {
          background-color: pink;
          display: flex;
          justify-content: space-around;
          padding: 1em;
        }
        a,
        a:link,
        a:active,
        a:visited {
          color: gray;
        }
      `}
    </style>
  </footer>
);
