import React, {useState} from 'react';
import '../index.css';

function BookCreate({onCreate, error}) {  
    const [title, setTitle] = useState('');

    const handleChange = (event) => setTitle(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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