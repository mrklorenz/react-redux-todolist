import React from 'react';
import {selectTodoItemId} from '../reducers/todosSlice';
import { useSelector } from 'react-redux';

function TodoItem(props) {

    const todo = useSelector(state => selectTodoItemId(state, props.id));

    return (
        <div>
            {todo.text}
        </div>
    );
}

export default TodoItem;