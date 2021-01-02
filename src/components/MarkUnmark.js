import React from 'react';

import { ReactComponent as Mark } from '../images/read.svg';
import { ReactComponent as Unmark } from '../images/unread.svg';

const MarkUnmark = props => {
  if (props.status) {
    return (
      <button className="book-card__btn--unmark card-btn">
        <Unmark className="book-card__img--unmark"/>
      </button>
    );
  }
  else {
    return (
      <button className="book-card__btn--mark card-btn">
        <Mark className="book-card__img--mark"/>
      </button>
    );
  }
}

export default MarkUnmark;
