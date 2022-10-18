import './App.css'
import { useEffect, useState } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelfList from './components/BookShelfList'

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false)
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll()
      setBooks(res)
    }

    getBooks()
  }, [])

  const changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then((response) => {
      changedBook.shelf = shelf
      // update state with changed book
      this.setState((prevState) => ({
        books: prevState.books
          // remove updated book from array
          .filter((book) => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook),
      }))
    })
  }
  return (
    <div className="app">
      {console.log(changeShelf)}
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              href="www.log.com"
              className="close-search"
              onClick={() => setShowSearchPage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <BookShelfList books={books} changeShelf={changeShelf} />
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <a
              href="www.log.com"
              onClick={() => setShowSearchPage(!showSearchPage)}
            >
              Add a book
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
