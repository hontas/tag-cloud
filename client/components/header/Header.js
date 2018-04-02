import React from 'react';

export default () => (
  <header>
    <h1>Tag Cloud by Pontus Lundin</h1>
    <style jsx>
      {`
        header {
          background-color: aquamarine;
          display: flex;
          justify-content: space-around;
          padding: 1em;
        }
        h1 {
          font-size: 6.5vw;
          margin: 0;
          text-align: center;
          text-shadow: 0 0 1em rgba(35, 72, 60, 0.5), 0 0 4px rgba(35, 72, 60, 0.5);
        }

        @media (min-width: 800px) {
          h1 {
            font-size: 3em;
            text-shadow: 0 0 2em rgba(35, 72, 60, 0.5), 0 0 4px rgba(35, 72, 60, 0.5);
          }
        }
      `}
    </style>
  </header>
);
