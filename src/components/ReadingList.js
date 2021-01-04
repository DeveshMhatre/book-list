import React from 'react';
import { useEffect, useState } from 'react';

import AddNew from './AddNew'; // Floating button
import InputOverlay from './InputOverlay'; // Overlay with input dialog
import BookCardContainer from './BookCardContainer'; // Individual book card

import { ReactComponent as Bookshelf } from '../images/bookshelf.svg';

const ReadingList = props => {
  // Store previously added books, if any present in localStorage
  // Else assign an empty array
  const [books, setBooks] = useState(() => {
    const oldBooks = localStorage.getItem('books');
    return oldBooks !== null ? JSON.parse(oldBooks) : [];
  });

  useEffect(() => {
    // Update localStorage when `books` state is altered
    localStorage.setItem('books', JSON.stringify(books))
  }, [books]);

  const [isInputOverlay, setIsInputOverlay] = useState(false); // To show/hide the input overlay
  const [isUpdateOverlay, setIsUpdateOverlay] = useState(false); // To show/hide the update overlay

  const handleBookSubmit = book => {
    setBooks(prevArr => [...prevArr, book]);
  }

  // Change title and author of the book that is to be updated
  // Book is determined by cross-checking ids
  const handleBookUpdate = ((id, title, author) => {
    setBooks(prevBooks => prevBooks.map(book => {
      if (book.id === id) {
        return {
          ...book,
          title: title,
          author: author,
        }
      }
      else {
        return book;
      }
    }));
  });

  // Change status of the book that is to be udpated
  // Book is determined by cross-checking ids
  const handleReadStatus = (bookId => {
    setBooks(prevBooks => prevBooks.map(book => book.id === bookId ? {...book, status: !book.status} : book));
  });

  // Remove a book from the state array books
  const handleDelete = (bookId => setBooks(books.filter(book => bookId !== book.id)));

  const handleInputOverlay = () => {
    setIsInputOverlay(prevState => !prevState);
  }

  const handleUpdateOverlay = () => {
    setIsUpdateOverlay(prevState => !prevState);
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
          isInputOverlay={isInputOverlay}
          isUpdateOverlay={isUpdateOverlay}
          handleOverlay={handleInputOverlay} />

        <InputOverlay
          isOverlay={isInputOverlay}
          handleBookSubmit={handleBookSubmit}
          handleOverlay={handleInputOverlay} />

      </article>
    );
  }

  else {
    return (
      <article className="reading-list">

        <BookCardContainer 
          books={books}
          isOverlay={isUpdateOverlay}
          handleBookUpdate={handleBookUpdate}
          handleReadStatus={handleReadStatus}
          handleOverlay={handleUpdateOverlay}
          handleDelete={handleDelete} />

        <InputOverlay
          isOverlay={isInputOverlay}
          handleBookSubmit={handleBookSubmit}
          handleOverlay={handleInputOverlay} />

        <AddNew
          isInputOverlay={isInputOverlay}
          isUpdateOverlay={isUpdateOverlay}
          handleOverlay={handleInputOverlay} />

      </article>
    );
  }
}

export default ReadingList;
