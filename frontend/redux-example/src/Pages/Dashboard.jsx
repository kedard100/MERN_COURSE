import React from 'react'
import AddBookForm from '../Components/AddBookForm'
import DisplayBookList from '../Components/DisplayBookList'
import UserProfile from '../Components/UserProfile'
import FilterBooks from '../Components/FilterBooks'

function Dashboard() {
  return (
    <>
    <UserProfile/>
    <AddBookForm/>
    <FilterBooks/>
    <DisplayBookList/>
    </>
  )
}


export default Dashboard