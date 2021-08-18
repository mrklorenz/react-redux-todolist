import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import {selectTodoIds} from "../reducers/todosSlice";
import "../styles/ToDoGroup.css";
import {getToDos} from '../../api/todosapi';
import {AddToDoList} from '../reducers/todosSlice';

function TodoGroup() {

    const todoListIds = useSelector(selectTodoIds);
    const dispatch = useDispatch();

    useEffect(() => {
        getToDos().then((response) => {
            dispatch(AddToDoList(response.data));
        })
    })

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