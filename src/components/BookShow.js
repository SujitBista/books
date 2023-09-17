
import {useState} from 'react';
import BookEdit from './BookEdit';
import '../custom.css';
function BookShow({singleBook, books, setBooks, deleteBookById}) {
    const[bookDisplayOrEdit, setBooKDisplayorEdit] = useState(false);
    const onDeleteButtonClick = () => deleteBookById(singleBook.id);
    const onEditButtonClick = () => setBooKDisplayorEdit(!bookDisplayOrEdit);  
    const onBackButtonClick = () => setBooKDisplayorEdit(false);
    const showSingleBook = () => <>
                    {singleBook.title}
                        <div>
                            <button onClick={onDeleteButtonClick}>×</button> 
                            <button onClick={onEditButtonClick}> ✐</button>
                        </div>
                    </>;
     
    return <div className="book-show">
             {!bookDisplayOrEdit ? showSingleBook()
                    : <BookEdit singleBook={singleBook} books={books} setBooks={setBooks} backButtonClick={onBackButtonClick} />} 
            </div>
}

export default BookShow;