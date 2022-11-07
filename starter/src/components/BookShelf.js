
import React from 'react'
import Books from './Books'

const bookshelf = ({books,onChangeShelf}) => {

return (
  <div className="bookshelf">
  <h2 className="bookshelf-title">{books.name}</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
      {books.map((book) =>(
        <li key={book.id}>
          <Books
            book={book}
            onChangeShelf={onChangeShelf}/>
        </li>
        ))}
      </ol>
    </div>
  </div>
    )
  };


export default bookshelf
