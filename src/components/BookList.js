
import BookShow from "./BookShow";
function BookList({books, setBooks, deleteBookById}) {
   return books.map(book =>  <div key={book.id} className="book-list">
               { <BookShow singleBook={book} deleteBookById={deleteBookById} books={books} setBooks={setBooks} />}
             </div>
            );
}

export default BookList;