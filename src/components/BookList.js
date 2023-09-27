
import BookShow from "./BookShow";

function BookList({books,deleteBookById, onSubmit, error}) {
  return books.map(book => (
      <div key={book.id} className="book-list">
        <BookShow 
          onSubmit={onSubmit} 
          singleBook={book} 
          deleteBookById={deleteBookById} 
          error={error} 
        /> 
      </div>
    ));
}

export default BookList;