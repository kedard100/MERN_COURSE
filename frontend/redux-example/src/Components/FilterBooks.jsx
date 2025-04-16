import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../redux/actions/bookActions'

function FilterBooks() {
    const categories=["ALL","Fiction","Non-Fiction","Science","History"]
    const dispatch=useDispatch()
  return (
    <>
    <label>Filter by category</label>
    <select onChange={(e)=>dispatch(setFilter(e.target.value))}>
{
    categories.map((cat)=>(
        <option key={cat}>{cat}</option>
    ))
}

    </select>
    </>
  )
}

export default FilterBooks