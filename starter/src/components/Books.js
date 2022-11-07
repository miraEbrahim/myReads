import React from 'react'

const Books = ({book,onChangeShelf}) => {

return (
    book.id !== undefined && (
    <div className="book">
        <div className="book-top">
            <div className="book-cover">
                
            {book.imageLinks !== undefined &&
                
                <img src={book.imageLinks.thumbnail} alt={book.title}>
                </img>
                   
            }
            </div>
            <div className="book-shelf-changer">
                <select onChange={(e) => onChangeShelf(book, e.target.value)} value={book.shelf}>
                    <option value="na" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>

        <div className="book-title">{book.title}</div>
        {(book.authors != null) &&
            <ul className="book-authors">{book.authors.map((author, index) => (
            <li key={index}> {author}
            </li>
        ))}</ul>

        }

    </div>
    )

    )
}


export default Books;
