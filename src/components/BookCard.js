import React from 'react';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';
import deleteIcon from '@iconify/icons-mdi/delete';

import MarkUnmark from './MarkUnmark';

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
          title="Update book"
          className="book-card__btn--update card-btn"
          onClick={handleClick}>
          <Icon
            icon={pencilIcon}
            className="book-card__img--update"/>
        </button>
        <MarkUnmark 
          bookId={props.book.id}
          handleReadStatus={props.handleReadStatus}
          status={props.book.status} />
        <button
          title="Delete book"
          className="book-card__btn--delete card-btn"
          onClick={() => props.handleDelete(props.book.id)}>
          <Icon
            icon={deleteIcon}
            className="book-card__img--delete"/>
        </button>
      </span>

      <p className="book-card__author">by {props.book.author}</p>

    </div>
  );
}

export default BookCard;
