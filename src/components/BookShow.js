
import {useState, useContext} from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';
import '../custom.css';

function BookShow({singleBook}) {
    const[bookShowEdit, setBookShowEdit] = useState(false);
    const {deleteBookById} = useContext(BooksContext);

    const onDeleteButtonClick = () => deleteBookById(singleBook.id);

    const onEditButtonClick = () => setBookShowEdit(!bookShowEdit);  

    const onBackButtonClick = () => setBookShowEdit(false);

    let content = (
        <>
            <div>{singleBook.title}</div>
            <div>
                <button onClick={onDeleteButtonClick}>×</button> 
                <button onClick={onEditButtonClick}> ✐</button>
            </div>
        </>
    );

    if(bookShowEdit) {
        content = (
            <BookEdit 
              singleBook={singleBook} 
              setBookShowEdit={setBookShowEdit}
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