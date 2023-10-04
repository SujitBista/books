
import {useState, useContext} from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';
import '../custom.css';

function BookShow({singleBook}) {
    const[bookDisplayOrEdit, setBookDisplayOrEdit] = useState(false);
    const {deleteBookById, updatedBookTitle} = useContext(BooksContext);

    const onDeleteButtonClick = () => deleteBookById(singleBook.id);

    const onEditButtonClick = () => setBookDisplayOrEdit(!bookDisplayOrEdit);  

    const onBackButtonClick = () => setBookDisplayOrEdit(false);

    const onSaveButtonClick = (id, title) => {
        setBookDisplayOrEdit(false);
        updatedBookTitle(id, title);
    }

    let content = (
        <>
            <div>{singleBook.title}</div>
            <div>
                <button onClick={onDeleteButtonClick}>×</button> 
                <button onClick={onEditButtonClick}> ✐</button>
            </div>
        </>
    );

    if(bookDisplayOrEdit) {
        content = (
            <BookEdit 
              onSubmit={onSaveButtonClick} 
              singleBook={singleBook} 
              backButtonClick={onBackButtonClick} 
            />
        );
    }

    return (
        <div className="book-show">
          {content}
        </div>
    );
}

export default BookShow;