import React from 'react';
import { Icon, InlineIcon  } from '@iconify/react';
import bookmarkCheckOutline from '@iconify/icons-mdi/bookmark-check-outline';
import bookmarkRemoveOutline from '@iconify/icons-mdi/bookmark-remove-outline';

const MarkUnmark = props => {
  if (props.status) {
    return (
      <button
        title="Mark as unread"
        className="book-card__btn--unmark card-btn"
        onClick={() => props.handleReadStatus(props.bookId)}>
        <Icon
          icon={bookmarkRemoveOutline}
          className="book-card__img--unmark"/>
      </button>
    );
  }
  else {
    return (
      <button
        title="Mark as read"
        className="book-card__btn--mark card-btn"
        onClick={() => props.handleReadStatus(props.bookId)}>
        <Icon
          icon={bookmarkCheckOutline}
          className="book-card__img--mark"/>
      </button>
    );
  }
}

export default MarkUnmark;
