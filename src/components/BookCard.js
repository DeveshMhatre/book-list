import React from 'react';
import { CSSTransition } from 'react-transition-group';

const BookCard = props => {
  const nodeRef = React.useRef(null);

  return (
    <div
      ref={nodeRef}
      className="book-card">
      <p className="book-card__title">{props.book.title}</p>
      <p className="book-card__author">{props.book.author}</p>
    </div>
  );
}

export default BookCard;
