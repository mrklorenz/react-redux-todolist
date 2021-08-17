import {React, useState} from 'react';
import { useDispatch } from 'react-redux';
import {AddToDo} from "../reducers/todosSlice";


function TodoForm(props) {

    const[text, setText] = useState("");

    const dispatch = useDispatch();

    function handleChange(event){
        setText(event.target.value);
    }

    function handleAdd() {
        dispatch(AddToDo(text));
        setText("");
    }

    return (
        <div>
            <input type="text" placeholder="Input what to do here!" value={text} onChange={handleChange}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default TodoForm;