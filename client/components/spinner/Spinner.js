import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// TODO: support passing size

const Spinner = ({ className }) => (
  <div className={classNames('Spinner', className)}>
    <div className="Spinner__animation" />
    <style jsx>
      {`
        @keyframes spinner {
          to {
            transform: rotate(360deg);
          }
        }

        .Spinner {
          display: inline-block;
          margin-left: 0.5em;
          position: relative;
          width: 1em;
          height: 1em;
        }

        .Spinner__animation:before {
          content: '';
          box-sizing: border-box;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1em;
          height: 1em;
          margin-top: -0.5em;
          margin-left: -0.5em;
          border-radius: 50%;
          border: 2px solid aquamarine;
          border-top-color: white;
          animation: spinner 0.6s linear infinite;
        }
      `}
    </style>
  </div>
);

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
