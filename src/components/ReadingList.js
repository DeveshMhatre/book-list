import React from 'react';
import { useState } from 'react';

import { ReactComponent as Bookshelf } from '../images/bookshelf.svg';

const ReadingList = props => {
  const [books, setBooks] = useState(null);

  if (books === null) {
    return (
      <article className="reading-list">
        <h1 className="reading-list__title">
          Your reading list is empty!<br />
          Add a book to populate it&hellip;
        </h1>
        <Bookshelf className="reading-list__img" />
      </article>
    );
  }

  else {
    return (
      <article className="reading-list">
        New books
      </article>
    );
  }
}

export default ReadingList;
