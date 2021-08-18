import React from 'react';
import {selectTodoItemId} from '../reducers/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import {ToggleTodo, DeleteTodo} from '../reducers/todosSlice';
import "../styles/ToDoItem.css";

function TodoItem(props) {

    const todo = useSelector(state => selectTodoItemId(state, props.id));

    const dispatch = useDispatch();

    const todoStatus = todo.done ? "done" : "";

    function handleToggle(event){
        event.stopPropagation();
        dispatch(ToggleTodo(props.id));
    }

    function handleDeleteTodo(event){
        event.stopPropagation();
        dispatch(DeleteTodo(props.id))
    }
    

    return (
        <div  className={`toDoFormDiv ${todoStatus}`}  onClick={handleToggle}>
            <span className="textSpan">{todo.text}</span>
            <span className="removeSpan" onClick={handleDeleteTodo}>x</span>
        </div>
    );
}

export default TodoItem;