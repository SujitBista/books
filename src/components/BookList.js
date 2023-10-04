
import {useContext} from 'react';
import BookShow from "./BookShow";
import BooksContext from "../context/books";

function BookList() {
  const {books} = useContext(BooksContext);
  console.log(books);
  return books.map(book => (
      <div className="book-list" key={book.id}>
        <BookShow 
          singleBook={book} 
        /> 
      </div>
    ));
}

export default BookList;