
import {useState} from 'react';

function BookEdit({singleBook, backButtonClick, onSubmit, error}) {
   const {id, title: initialTitle} = singleBook;
   const [title, setTitle] = useState(initialTitle);

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