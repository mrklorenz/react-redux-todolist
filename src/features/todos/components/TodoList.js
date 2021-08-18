import React from 'react';
import TodoForm from './TodoForm';
import TodoGroup from './TodoGroup';
import "../styles/ToDoList.css";
import { Divider } from 'antd';

function TodoList(props) {
    return (
        <div className="todoList">
            <h1>TodoList</h1>
            <Divider/>
            <TodoForm></TodoForm>
            <TodoGroup></TodoGroup>
        </div>
    );
}

export default TodoList;