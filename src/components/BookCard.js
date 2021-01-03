import React from 'react';
import { useEffect, useState } from 'react';

import MarkUnmark from './MarkUnmark';

import { ReactComponent as Delete } from '../images/remove.svg';
import { ReactComponent as Update } from '../images/update.svg';

const BookCard = props => {
  // To change BookCard status (appearance-wise) from read to unread, and vice versa
  const [cardClass, setCardClass] = useState('unread');

  useEffect(() => {
    // To change colors of the card based on the book status
    props.book.status ? setCardClass('read') : setCardClass('unread');
  }, [cardClass, props.book.status]);

  const handleClick = e => {
    e.preventDefault();

    // So UpdateOverlay knows which book to update
    props.handleBook(props.book);
    props.handleOverlay();
  }

  return (
    <div
      className={`book-card ${cardClass}`}>

      <p className="book-card__title">{props.book.title}</p>

      <span className="book-card__btns">
        <button
          className="book-card__btn--update card-btn"
          onClick={handleClick}>
          <Update className="book-card__img--update"/>
        </button>
        <MarkUnmark 
          bookId={props.book.id}
          handleReadStatus={props.handleReadStatus}
          status={props.book.status} />
        <button
          className="book-card__btn--delete card-btn"
          onClick={() => props.handleDelete(props.book.id)}>
          <Delete className="book-card__img--delete"/>
        </button>
      </span>

      <p className="book-card__author">by {props.book.author}</p>

    </div>
  );
}

export default BookCard;
