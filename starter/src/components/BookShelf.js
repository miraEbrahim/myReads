import React from 'react'
import Book from './Book'

const BookShelf = ({ books, changeShelf }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            book={book}
            books={books}
            key={book.id}
            changeShelf={changeShelf}
          />
        ))}
      </ol>
    </div>
  )
}

export default BookShelf
