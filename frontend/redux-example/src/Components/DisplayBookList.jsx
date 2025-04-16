import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../assets/bookList.css'
import { deleteBook } from '../redux/features/bookSlice'
//import { deleteBook } from '../redux/actions/bookActions'
function DisplayBookList() {
 // const{books,filter}=useSelector((state)=>state.book.books)
 const books=useSelector((state)=>state.book.books)
 const filter=useSelector((state)=>state.book.filter)
  const dispatch=useDispatch()
  
  console.log("filter value",filter)
  const filterBooks=  filter==="ALL"?books:books.filter((book)=>book.category===filter)
  return (
  <>
    <div className="book-table-container">
      <h2>Book List</h2>
      {filterBooks?.length === 0 ? (
        <p className="empty-msg">No books available.</p>
      ) : (
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterBooks?.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => dispatch(deleteBook(book.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </>
  )
}

export default DisplayBookList