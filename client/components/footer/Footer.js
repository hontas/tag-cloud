import React from 'react';

export default () => (
  <footer className="Footer">
    <div className="Footer__wrapper">
      <a className="Footer__link" href="mailto:lundin.pontus@gmail.com">
        lundin.pontus@gmail.com
      </a>
      <a className="Footer__link" href="tel:+46735133879">
        +46735133879
      </a>
    </div>
    <style jsx>
      {`
        .Footer {
          background-color: pink;
          color: gray;
          padding: 1em;
        }

        .Footer__wrapper {
          display: flex;
          justify-content: space-around;
          max-width: 800px;
          margin: 0 auto;
        }

        .Footer__link:hover {
          color: black;
        }
      `}
    </style>
  </footer>
);
