import {React, useState} from 'react';
import { useDispatch } from 'react-redux';
import {AddToDo} from "../reducers/todosSlice";
import "../styles/ToDoForm.css";
import {addToDo} from '../../api/todosapi';
import { Input,Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';



function TodoForm(props) {
    const[text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event){
        setText(event.target.value);
    }

    function handleAdd() {
        if(text === ""){
            alert("You cannot add an empty string.");
        }else{
            addToDo(text).then((response) => {
                dispatch(AddToDo(response.data));
            });
            setText("");
        }
    }

    return (
        <div className="formDiv">
            <Input type="text" placeholder="Input what to do here!" value={text} onChange={handleChange}></Input>
            <br></br>
            <br></br>
            <Button icon={<PlusOutlined />} size="size" onClick={handleAdd}>Add to do</Button>
        </div>
    );
}

export default TodoForm;