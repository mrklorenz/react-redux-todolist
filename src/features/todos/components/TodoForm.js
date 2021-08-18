import {React, useState} from 'react';
import { useDispatch } from 'react-redux';
import {AddToDo} from "../reducers/todosSlice";
import "../styles/ToDoForm.css";


function TodoForm(props) {
    const[text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event){
        setText(event.target.value);
    }

    function handleAdd() {
        if(text === ""){
            alert("You cannot add an empty string.");
        }else{
            dispatch(AddToDo(text));
            setText("");
        }
    }

    return (
        <div>
            <input className="toDoFormDiv" type="text" placeholder="Input what to do here!" value={text} onChange={handleChange}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default TodoForm;