import React from 'react';
import PropTypes from 'prop-types';
import { isHashTag } from '../../../common/validators';
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
        <label className="InputForm__label" htmlFor="hashtag-input">
          Twitter hashtag <span className="strikethrough">or RSS link:</span>
        </label>
        <div className="InputForm__input-group">
          <input
            className="InputForm__input"
            type="text"
            id="hashtag-input"
            data-test="hashtag-input"
            ref={this.textInput}
            autoComplete="off"
          />
          <button className="InputForm__button" type="sumbit" data-test="submit-button">
            Hämta taggmoln
            {isLoading && <Spinner />}
          </button>
        </div>
        {error && (
          <p className="InputForm__error" data-test="validation-error">
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

            .InputForm__label {
              display: block;
            }

            .InputForm__input,
            .InputForm__button {
              border-radius: 5px;
              font-size: 1em;
              padding: 0.5em;
              width: 100%;
            }
            .InputForm__input {
              border: 1px gray;
              margin-bottom: 0.5em;
            }
            .InputForm__button {
              background: rgba(200, 230, 255, 0.25);
              border: 1px solid aquamarine;
              color: white;
              display: block;
            }

            .InputForm__error {
              color: pink;
            }

            @media (min-width: 800px) {
              .InputForm__input-group {
                display: flex;
              }
              .InputForm__input {
                border-radius: 5px 0 0 5px;
                margin-bottom: 0;
              }
              .InputForm__button {
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
