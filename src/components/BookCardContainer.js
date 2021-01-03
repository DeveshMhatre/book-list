import React from 'react'

import BookCard from './BookCard';
import UpdateOverlay from './UpdateOverlay';

const BookCardContainer = props => {
  // To store book that is to be updated
  const [book, setBook] = React.useState({});

  const handleBook = (book => {
    setBook(book);
  });

  // Not rendering UpdateOverlay in BookCard as it gets rendered for all
  // books, and focuses on the last
  return(
    <section
      className='book-card-container'>
      {props.books.map((book, index) => {

        return (
          <BookCard
            key={book.id}
            book={book}
            handleBook={handleBook}
            handleOverlay={props.handleOverlay}
            handleReadStatus={props.handleReadStatus}
            handleDelete={props.handleDelete}/>
        );
      })}

      <UpdateOverlay
        book={book}
        isOverlay={props.isOverlay}
        handleBook={handleBook}
        handleOverlay={props.handleOverlay}
        handleBookUpdate={props.handleBookUpdate} />
    </section>
  );
}

export default BookCardContainer;
