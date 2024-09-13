import React from 'react'
import BookName from "./bookName"
import BookPrice from './bookPrice'
import BookAuthor from './BookAuthor'
function Book() {
  return (
    <div>
      <BookName/>
      <BookPrice/>
      <BookAuthor/>
    </div>
  )
}

export default Book
