import React from 'react';

export default () => (
  <footer>
    <div className="max-width">
      <a href="mailto:lundin.pontus@gmail.com">lundin.pontus@gmail.com</a>
      <a href="tel:+46735133879">+46735133879</a>
    </div>
    <style jsx>
      {`
        footer {
          background-color: pink;
          padding: 1em;
        }
        .max-width {
          display: flex;
          justify-content: space-around;
          max-width: 800px;
          margin: 0 auto;
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
