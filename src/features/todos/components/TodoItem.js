import React from 'react';
import {selectTodoItemId} from '../reducers/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import {ToggleTodo} from '../reducers/todosSlice';
import "../styles/ToDoItem.css";

function TodoItem(props) {

    const todo = useSelector(state => selectTodoItemId(state, props.id));

    const dispatch = useDispatch();

    function handleToggle(event){
        dispatch(ToggleTodo(event.target.value));
    }

    return (
        <div onClick={handleToggle}>
            {todo.text}
            <span className="removeSpan">x</span>
        </div>
    );
}

export default TodoItem;