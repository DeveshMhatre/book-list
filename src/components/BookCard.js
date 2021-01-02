import React from 'react';
import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import MarkUnmark from './MarkUnmark';

import { ReactComponent as Delete } from '../images/remove.svg';
import { ReactComponent as Update } from '../images/update.svg';

const BookCard = props => {
  const nodeRef = React.useRef(null);

  let cardClass = 'unread';

  useEffect(() => {
    // To change colors of the card based on the book status
    let cardClass = props.book.status ? 'read' : 'unread';
  }, [props.book.status]);

  return (
    <div
      ref={nodeRef}
      className={`book-card ${cardClass}`}>

      <p className="book-card__title">{props.book.title}</p>

      <span className="book-card__btns">
        <MarkUnmark status={props.book.status} />
        <button className="book-card__btn--update card-btn">
          <Update className="book-card__img--update"/>
        </button>
        <button className="book-card__btn--delete card-btn">
          <Delete className="book-card__img--delete"/>
        </button>
      </span>

      <p className="book-card__author">{props.book.author}</p>

    </div>
  );
}

export default BookCard;
