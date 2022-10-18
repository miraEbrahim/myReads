import React from 'react'
import BookShelfChanger from './BookShelfChanger'

const Book = ({ book, books, changeShelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        >
          <BookShelfChanger
            book={book}
            books={books}
            changeShelf={changeShelf}
          />
        </div>
      </div>

      <div className="book-title">{book.title}</div>
      {book.authors &&
        book.authors.map((author, index) => (
          <div className="book-authors" key={index}>
            {author}
          </div>
        ))}
    </div>
  )
}

export default Book
