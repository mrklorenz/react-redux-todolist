import React from 'react';
import TodoForm from './TodoForm';
import TodoGroup from './TodoGroup';
import "../styles/ToDoList.css";

function TodoList(props) {
    return (
        <div className="todoList">
            <h1>TodoList</h1>
            <TodoGroup></TodoGroup>
            <TodoForm></TodoForm>
        </div>
    );
}

export default TodoList;