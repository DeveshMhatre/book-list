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
