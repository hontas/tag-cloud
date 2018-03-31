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
          text-align: center;
          text-shadow: 0 0 1.5em darkgreen;
        }
      `}
    </style>
  </header>
);
