import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import {selectTodoIds} from "../reducers/todosSlice";

function TodoGroup() {

    const todoListIds = useSelector(selectTodoIds);

    return (
        <div>
            {
                todoListIds.map((id) => (
                    <TodoItem key={id} id={id}/>
                ))
            }
        </div>
    );
}

export default TodoGroup;