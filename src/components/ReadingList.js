import React from 'react';
import { useState } from 'react';

import AddNew from './AddNew'; // Floating button
import InputOverlay from './InputOverlay'; // Overlay with input dialog
import BookCardContainer from './BookCardContainer'; // Individual book card

import { ReactComponent as Bookshelf } from '../images/bookshelf.svg';

const ReadingList = props => {
  // const [books, setBooks] = useState([]); // To store all of the books
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Lorem ipsum dolor',
      author: 'sit amet consectetur, adipisicing elit',
      status: true
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor',
      author: 'sit amet consectetur, adipisicing elit',
      status: false
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor',
      author: 'sit amet consectetur, adipisicing elit',
      status: false
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor',
      author: 'sit amet consectetur, adipisicing elit',
      status: false
    }
  ]);
  const [isOverlay, setIsOverlay] = useState(false); // To show/hide the input overlay

  const handleBookSubmit = book => {
    setBooks(prevArr => [...prevArr, book]);
  }

  const handleOverlay = () => {
    isOverlay ? setIsOverlay(false) : setIsOverlay(true);
  }

  // If books is an empty array
  if (books.length === 0) {
    return (
      <article className="reading-list-empty">
        <p className="reading-list-empty__title">
          Your reading list is empty!<br />
          Add a book to populate it&hellip;
        </p>

        <Bookshelf className="reading-list-empty__img" />

        <AddNew
          isOverlay={isOverlay}
          handleOverlay={handleOverlay} />

        <InputOverlay
          isOverlay={isOverlay}
          handleBookSubmit={handleBookSubmit}
          handleOverlay={handleOverlay} />

      </article>
    );
  }

  else {
    return (
      <article className="reading-list">

        <BookCardContainer books={books} />

        <InputOverlay
          isOverlay={isOverlay}
          handleBookSubmit={handleBookSubmit}
          handleOverlay={handleOverlay} />

        <AddNew
          isOverlay={isOverlay}
          handleOverlay={handleOverlay} />

      </article>
    );
  }
}

export default ReadingList;
