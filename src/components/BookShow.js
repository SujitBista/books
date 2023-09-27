
import {useState} from 'react';
import BookEdit from './BookEdit';
import '../custom.css';

function BookShow({singleBook, deleteBookById, onSubmit, error}) {
    const[bookDisplayOrEdit, setBookDisplayOrEdit] = useState(false);

    const onDeleteButtonClick = () => deleteBookById(singleBook.id);

    const onEditButtonClick = () => setBookDisplayOrEdit(!bookDisplayOrEdit);  

    const onBackButtonClick = () => setBookDisplayOrEdit(false);

    const onSaveButtonClick = (id, title) => {
        setBookDisplayOrEdit(false);
        onSubmit(id, title);
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
              error={error}
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