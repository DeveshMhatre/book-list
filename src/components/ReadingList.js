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
      title: 'Range',
      author: 'David Epstein',
      status: true
    },
    {
      id: 2,
      title: 'The Big Sleep',
      author: 'Raymond Chandler',
      status: false
    },
    {
      id: 3,
      title: 'Why I Killed Pluto and Why It Had It Coming',
      author: 'Mike Brown',
      status: false
    },
    {
      id: 4,
      title: 'Surely You\'re Joking, Mr. Feynman!',
      author: 'Richard P. Feynman',
      status: false
    }
  ]);

  const [isOverlay, setIsOverlay] = useState(false); // To show/hide the input overlay

  const handleBookSubmit = book => {
    setBooks(prevArr => [...prevArr, book]);
  }

  const handleReadStatus = (bookId => {
    setBooks(prevBooks => prevBooks.map(book => book.id === bookId ? {...book, status: !book.status} : book));
  });

  const handleDelete = (bookId => setBooks(books.filter(book => bookId !== book.id)));

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

        <BookCardContainer 
          books={books}
          handleReadStatus={handleReadStatus}
          handleDelete={handleDelete} />

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
