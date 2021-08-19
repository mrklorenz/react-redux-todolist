import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ToggleTodo, DeleteTodo, selectTodoItemId} from '../reducers/todosSlice';
import "../styles/ToDoItem.css";
import {DeleteFilled} from '@ant-design/icons';
import { deleteToDo , updateToDo} from '../../api/todosapi';
import {EditTwoTone } from '@ant-design/icons';
import {Input, Modal} from 'antd';
import { useState } from 'react';

function TodoItem(props) {

    const todo = useSelector(state => selectTodoItemId(state, props.id));
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const[text, setText] = useState("");

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

    function handleEditClick(event){
        event.stopPropagation();
        setIsModalVisible(true);
    }

    const handleOk = (event) => {
        event.stopPropagation();
        setIsModalVisible(false);
    };
    
    const handleCancel = (event) => {
        event.stopPropagation();
        setText("");
        setIsModalVisible(false);
    };

    function handleEditChange(event){
        event.stopPropagation();
        setText(event.target.value);
    };

    return (
        <div className={`toDoFormDiv ${todoStatus}`}  onClick={handleToggle}>
            <span className="textSpan">{todo.text}</span>
            <DeleteFilled className="removeSpan" onClick={handleDeleteTodo}/>
            <EditTwoTone className="removeSpan" onClick={handleEditClick}/>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input onChange={handleEditChange} value={text}/>
            </Modal>
        </div>
    );
}


export default TodoItem;