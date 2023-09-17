
import {useState} from 'react';
import BookEdit from './BookEdit';
import '../custom.css';
function BookShow({singleBook, deleteBookById}) {
    const [onBookEdit, setonBookEdit] = useState(false);
    const deleteSingleBook = () => deleteBookById(singleBook.id);
    const handleBookEdit = (value) => setonBookEdit(value || true);
    
    // const showInputBox = () =>  <>
    //               <input type="text" value={titleChange || singleBook.title} onChange={handleTitleChange} autoFocus/>
    //                <br />
    //                <button>Save</button>
    //                <button onClick={handleBackButtonClick}>Back</button>
    //             </>;
    
    const showSingleBook = () => <>
                    {singleBook.title}
                        <div>
                            <button onClick={deleteSingleBook}>×</button> 
                            <button onClick={handleBookEdit}> ✐</button>
                        </div>
                    </>;
     
    return <div className="book-show">
             {!onBookEdit ? showSingleBook()
                    : <BookEdit singleBook={singleBook} onBookEdit={onBookEdit} handleBookEdit={handleBookEdit}/>} 
            </div>
}

export default BookShow;