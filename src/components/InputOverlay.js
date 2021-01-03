import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const InputOverlay = props => {
  const [title, setTitle] = useState(''); // To store title of the new book
  const [author, setAuthor] = useState(''); // To store author of the new book

  const nodeRef = React.useRef(null);

  const handleTitle = e => {
    setTitle(e.target.value);
  }

  const handleAuthor = e => {
    setAuthor(e.target.value);
  }

  const clearInputs = () => {
    // Clear the text fields only when they are not empty
    if (title !== '' && author !== '') {
      setTitle('');
      setAuthor('');
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    // To prevent empty fields from being added to the books list
    if (title !== '' && author !== '') {
      props.handleBookSubmit({
        id: uuidv4(),
        title: title,
        author: author,
        status: false
      });
      clearInputs();
      props.handleOverlay();
    }
  }

  const handleCancel = e => {
    e.preventDefault();

    clearInputs();
    props.handleOverlay();
  }

  // unmountOnExit to keep it from rendering onLoad
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.isOverlay}
      classNames="slide-left"
      unmountOnExit={true}
      timeout={300}>
      <section 
        ref={nodeRef}
        className="overlay">
        <div className="overlay__form">
          <form className="form">

            <div className="form__group">
              <label
                className="form__label"
                htmlFor="form-title">
                New Book Title
              </label>
              <input
                type="text"
                className="form__input"
                id="form-title"
                value={title}
                onChange={handleTitle}
                placeholder="Enter book title here&hellip;" />
            </div>

            <div className="form__group">
              <label
                className="form__label"
                htmlFor="form-author">
                New Book Author
              </label>
              <input
                type="text"
                className="form__input"
                id="form-author"
                value={author}
                onChange={handleAuthor}
                placeholder="Enter book author here&hellip;" />
            </div>

            <div className="form__btns">
              <button
                onClick={handleSubmit}
                className="overlay-btn">
                Add Book
              </button>
              <button
                onClick={handleCancel}
                className="overlay-btn">
                Cancel
              </button>
            </div>

          </form>
        </div>
      </section>
    </CSSTransition>
  );
}

export default InputOverlay;
