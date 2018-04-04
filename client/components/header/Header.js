import React from 'react';

const getPrimaryTextShadow = (blur) => `0 0 ${blur} rgba(35, 72, 60, 0.5)`;
const secondaryTextShadow = '0 0 4px rgba(35, 72, 60, 0.5)';

export default () => (
  <header className="Header">
    <h1 className="Header__title">Tag Cloud by Pontus Lundin</h1>
    <style jsx>
      {`
        .Header {
          background-color: aquamarine;
          display: flex;
          justify-content: space-around;
          padding: 1em;
        }

        .Header__title {
          font-size: 6.5vw;
          margin: 0;
          text-align: center;
          text-shadow: ${getPrimaryTextShadow('1em')}, ${secondaryTextShadow};
        }

        @media (min-width: 800px) {
          .Header__title {
            font-size: 3em;
            text-shadow: ${getPrimaryTextShadow('2em')}, ${secondaryTextShadow};
          }
        }
      `}
    </style>
  </header>
);
