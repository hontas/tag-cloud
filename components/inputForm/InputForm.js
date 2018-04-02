import React from 'react';
import PropTypes from 'prop-types';
import { isHashTag } from '../../common/validators';
import Spinner from '../spinner/Spinner';

// TODO: break out input and button to its own components

class InputForm extends React.Component {
  state = {
    error: null,
    isLoading: false,
  };

  getTagsFor = (evt) => {
    evt.preventDefault();
    const { value } = this.textInput.current;

    // TODO handle and validate RSS-link

    if (!isHashTag(value)) {
      this.setState({ error: 'Not a valid hashtag' });
      return;
    }

    this.setState({ isLoading: true });

    this.props
      .fetchTagsFor(value)
      .then(() => {
        this.textInput.current.value = '';
        this.setState({
          error: null,
          isLoading: false,
        });
      })
      .catch((reason) => {
        this.setState({
          error: reason.error.message,
          isLoading: false,
        });
      });
  };

  textInput = React.createRef();

  render() {
    const { error, isLoading } = this.state;
    return (
      <form className="InputForm" onSubmit={this.getTagsFor}>
        <label htmlFor="hashtag-input">
          Twitter hashtag <span className="strikethrough">or RSS link:</span>
        </label>
        <div className="input-group">
          <input type="text" id="hashtag-input" data-test="hashtag-input" ref={this.textInput} autoComplete="off" />
          <button type="sumbit" data-test="submit-button">
            Hämta taggmoln
            {isLoading && <Spinner />}
          </button>
        </div>
        {error && (
          <p className="error" data-test="validation-error">
            {error}
          </p>
        )}
        <style jsx>
          {`
            .InputForm {
              padding: 1em;
              padding-bottom: 0.5em;
              width: 100%;
            }
            label {
              display: block;
            }
            input,
            button {
              border-radius: 5px;
              font-size: 1em;
              padding: 0.5em;
              width: 100%;
            }
            input {
              border: 1px gray;
              margin-bottom: 0.5em;
            }
            button {
              background: rgba(200, 230, 255, 0.25);
              border: 1px solid aquamarine;
              color: white;
              display: block;
            }
            .error {
              color: pink;
            }
            .strikethrough {
              text-decoration: line-through;
            }

            @media (min-width: 800px) {
              .input-group {
                display: flex;
              }
              input {
                border-radius: 5px 0 0 5px;
                margin-bottom: 0;
              }
              button {
                border-radius: 0 5px 5px 0;
              }
            }
          `}
        </style>
      </form>
    );
  }
}

InputForm.propTypes = {
  fetchTagsFor: PropTypes.func.isRequired,
};

export default InputForm;
