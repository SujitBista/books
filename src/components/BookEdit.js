
import {useState} from 'react';
import axios from 'axios';
function BookEdit({singleBook, backButtonClick, books, setBooks}) {
    const {id, title: initialTitle} = singleBook;
    const [title, setTitle] = useState(initialTitle);
    const [error, setError] = useState(null);

    const handleTitleChange = event =>  setTitle(event.target.value);
    const handleBackButtonClick = () => backButtonClick();
    const handleSaveClick = async () => {
         try {
            const response = await updatedBookTitle(id, title);
            const updatedBooks = books.map(book =>  book.id === id ?  {...book, ...response.data}: book);
            setBooks(updatedBooks);
            handleBackButtonClick();
         } catch(error){
            setError(`Error editing books: ${error.message}`);
            //console.error('Error Editing books', error);
         }
    }
    const updatedBookTitle = async (id, title) => {
        const response =  await axios.put(`http://localhost:3001/books/${id}`, {title});
        return response.data;
     }

    return <>
            <input type="text" value={title} onChange={handleTitleChange} autoFocus/>
            <br />
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleBackButtonClick}>Back</button>
            {error && <div className="error-message">{error}</div>}
    </>
}

export default BookEdit;