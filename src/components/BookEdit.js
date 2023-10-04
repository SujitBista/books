
import {useState, useContext} from 'react';
import BooksContext from '../context/books';

function BookEdit({singleBook, backButtonClick, onSubmit}) {
   const {id, title: initialTitle} = singleBook;
   const [title, setTitle] = useState(initialTitle);
   const {error} = useContext(BooksContext);

   const handleTitleChange = event =>  setTitle(event.target.value);

   const handleBackButtonClick = () => backButtonClick();

   const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(id, title);
   }

    return (
      <form onSubmit={handleSubmit}>
         <input type="text" value={title} onChange={handleTitleChange} autoFocus/>
         <br />
         <button>Save</button>
         <button onClick={handleBackButtonClick}>Back</button>
         {error && <div className="error-message">{error}</div>}
      </form>
   );
}

export default BookEdit;