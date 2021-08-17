import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import {selectTodoIds} from "../reducers/todosSlice";
import "../styles/ToDoGroup.css";

function TodoGroup() {

    const todoListIds = useSelector(selectTodoIds);

    return (
        <div className="todoGroupItems">
            {
                todoListIds.map((id) => (
                    <TodoItem key={id} id={id}/>
                ))
            }
        </div>
    );
}

export default TodoGroup;