import {createContext, useState} from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({children}) {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3001/books');
            setBooks(response.data);
        } catch(error) {
            console.error('Error fetching books', error);
        }
    }

    const createBook = async title => {
        try {
            const response = await axios.post('http://localhost:3001/books', {title: title});
            setBooks([...books, response.data]);
        } catch(error) {
            setError(`Error Creating a book ${error}`);
            //console.error('Error creating a book', error);
        }
    }

    const deleteBookById = async bookId => {
        //filter method gives brand new array with all the different objects inside it that pass truthiness test without altering the original array.
         try {
            const response = await axios.delete(`http://localhost:3001/books/${bookId}`);
            if(response.status === 200) { 
                if(response.data.message) {
                    console.log(response.data.message);
                }
                const updatedBooks = books.filter(book =>  book.id !== bookId);
                setBooks(updatedBooks);
            } else {
                console.error('Failed to delete book. Server responded with status: ', response.status);
            }
         } catch(error) {
            console.error('An error occured while deleting a book: ', error);
         }
         
    }
    
    const editBookById = async (id, title) => {
        try {
           const response = await updatedBookTitle(id, title);
           const updatedBooks = books.map(book =>  book.id === id ?  {...book, ...response}: book);
           setBooks(updatedBooks);
        } catch(error){
           setError(`Error editing books: ${error.message}`);
           console.error('Error Editing books', error);
        }
   }

    const updatedBookTitle = async (id, title) => {
       const response =  await axios.put(`http://localhost:3001/books/${id}`, {title});
       return response.data;
    }

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        deleteBookById,
        editBookById,
        updatedBookTitle,
        error
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;