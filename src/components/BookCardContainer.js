import React from 'react'

import BookCard from './BookCard';

const BookCardContainer = props => {
  return(
    <section className='book-card-container'>
      {props.books.map(book => {
        return <BookCard
                  key={book.id}
                  book={book}
                  handleReadStatus={props.handleReadStatus}
                  handleDelete={props.handleDelete}/>
      })}
    </section>
  );
}

export default BookCardContainer;
