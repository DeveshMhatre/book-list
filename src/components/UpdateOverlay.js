import React from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const UpdateOverlay = props => {
  const [title, setTitle] = useState(''); // To store the previous title of the book
  const [author, setAuthor] = useState(''); // To store store the previous author of the book

  const nodeRef = React.useRef(null);

  // Update states whenever props.book is finished updating
  React.useEffect(() => {
    setTitle(props.book.title);
    setAuthor(props.book.author);
  }, [props.book]);

  const handleTitle = e => {
    setTitle(e.target.value);
  }

  const handleAuthor = e => {
    setAuthor(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    // To prevent empty fields from being added to the books list
    if (title !== '' && author !== '') {
      props.handleBookUpdate(props.book.id, title, author);
      props.handleOverlay();
    }
  }

  const handleCancel = e => {
    e.preventDefault();

    props.handleBook({}); // Reset props.book to an empty obj, just a precaution
    props.handleOverlay();
  }

  // unmountOnExit to keep it from rendering onLoad
  // title || '' to avoid uncontrollable error
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.isOverlay}
      classNames="slide-left"
      unmountOnExit={true}
      timeout={300}>
      <section 
        ref={nodeRef}
        className="update-overlay">
        <div className="update-overlay__form">
          <form className="update-form">

            <div className="update-form__group">
              <label
                className="update-form__label"
                htmlFor="update-form-title">
                New Book Title
              </label>
              <input
                type="text"
                className="update-form__input"
                id="update-form-title"
                value={title || ''} 
                onChange={handleTitle}
                placeholder="Enter book title here&hellip;" />
            </div>

            <div className="update-form__group">
              <label
                className="update-form__label"
                htmlFor="update-form-author">
                New Book Author
              </label>
              <input
                type="text"
                className="update-form__input"
                id="update-form-author"
                value={author || ''}
                onChange={handleAuthor}
                placeholder="Enter book author here&hellip;" />
            </div>

            <div className="update-form__btns">
              <button
                onClick={handleSubmit}
                className="overlay-btn">
                Update Book
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

export default UpdateOverlay;
