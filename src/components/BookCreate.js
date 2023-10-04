import {useState, useContext} from 'react';
import BooksContext from '../context/books';

import '../index.css';

function BookCreate() {
    const [title, setTitle] = useState('');
    const {createBook, error} = useContext(BooksContext); 

    const handleChange = (event) => setTitle(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(createBook);
        createBook(title);
        setTitle('');
    }

    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <h3>Add a Book</h3>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} type="text" placeholder="Add Book" />
                <div>
                    <button className="button">Add Book</button>
                </div>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
}

export default BookCreate;