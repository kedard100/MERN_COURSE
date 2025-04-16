import React, { useState } from 'react'

import '../assets/bookForm.css'
import { useDispatch } from 'react-redux'
//import { addBook } from '../redux/actions/bookActions'
import { nanoid } from 'nanoid'
import { addBook } from '../redux/features/bookSlice'

function AddBookForm() {
  const dispatch=useDispatch()
    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(addBook({...book,id:nanoid()}))
    }
    const[book,setBook]=useState({
        title:'',
        author:'',
        category:"ALL"
    })
  return (
   <>
    <form onSubmit={handleSubmit} className="book-form">
      <h2>Add New Book</h2>
      <div className="form-group">
        <label>Book Title</label>
        <input
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          placeholder="Enter book title"
          required
        />
      </div>

      <div className="form-group">
        <label>Author</label>
        <input
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          placeholder="Enter author name"
          required
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          value={book.category}
          onChange={(e) => setBook({ ...book, category: e.target.value })}
        >
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Science</option>
          <option>History</option>
        </select>
      </div>

      <button type="submit" className="submit-btn">Add Book</button>
    </form>
   </>
  )
}

export default AddBookForm