
import {useState} from 'react';
function BookCreate() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState([]);
    const [count, setCount] = useState(0);

    //const handleChange = (e) => setTitle(e.target.value);
    const handleClick = () => {
        setCount(count + 1);
        setContent([...content, {id: count, title}]);
        
        setTitle('');
    }
    const renderContent = content.map((content) => <div key={content.id}>{content.title}</div>);
    return (<div>
        <input onChange={ event => setTitle(event.target.value)} type="text" value={title} placeholder="Book Title"/>
        <br /><br />
        <button onClick={(handleClick)}>Add Book</button>
        <div>{renderContent}</div>
    </div>);
}

export default BookCreate;