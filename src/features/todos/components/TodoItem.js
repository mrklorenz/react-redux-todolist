import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ToggleTodo, DeleteTodo, selectTodoItemId} from '../reducers/todosSlice';
import "../styles/ToDoItem.css";
import {DeleteFilled} from '@ant-design/icons';
import { deleteToDo , updateToDo} from '../../api/todosapi';

function TodoItem(props) {

    const todo = useSelector(state => selectTodoItemId(state, props.id));

    const dispatch = useDispatch();

    const todoStatus = todo.done ? "done" : "";

    const handleToggle = () => {
        updateToDo(props.id, { done: !todo.done }).then(() => {
            dispatch(ToggleTodo(props.id));
        });
    };

    function handleDeleteTodo(event){
        deleteToDo(props.id).then((response) => {
            dispatch(DeleteTodo(props.id));
        })
        event.stopPropagation();
    }

    return (
        <div className={`toDoFormDiv ${todoStatus}`}  onClick={handleToggle}>
            <span className="textSpan">{todo.text}</span>
            <DeleteFilled className="removeSpan" onClick={handleDeleteTodo}/>
        </div>
    );
}

export default TodoItem;