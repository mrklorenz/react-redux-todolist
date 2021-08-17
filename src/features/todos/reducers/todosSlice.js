import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";


const todoAdapter = createEntityAdapter();

const initialState = todoAdapter.getInitialState({
    ids : ["1"],
    entities : {
        1 : {
            id : "1",
            text: "test",
            done : false
        }
    }
});

const todosSlice = createSlice({
    name: "todos",
    initialState : initialState,
    reducers: {
        AddToDo(state, action){
            todoAdapter.addOne(state, {
                id: uuid(),
                text: action.payload,
                done: false
            });
            return state;
        }
    }
})

export const {AddToDo} = todosSlice.actions;
export default todosSlice.reducer;
export const {selectIds : selectTodoIds , selectById : selectTodoItemId } = todoAdapter.getSelectors(state => state.todoList);
