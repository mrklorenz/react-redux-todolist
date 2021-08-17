import React from 'react';
import {selectTodoItemId} from '../reducers/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import {ToggleTodo, DeleteTodo} from '../reducers/todosSlice';
import "../styles/ToDoItem.css";

function TodoItem(props) {

    const todo = useSelector(state => selectTodoItemId(state, props.id));

    const dispatch = useDispatch();

    function handleToggle(event){
        dispatch(ToggleTodo(event.target.value));
    }

    function handleDeleteTodo(event){
        dispatch(DeleteTodo(event.target.value))
    }

    return (
        <div onClick={handleToggle} className="toggleDiv">
            {todo.text}
            <span className="removeSpan" onClick={handleDeleteTodo}>x</span>
        </div>
    );
}

export default TodoItem;