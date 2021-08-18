import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";


const todoAdapter = createEntityAdapter();

const initialState = todoAdapter.getInitialState({
    ids : ["1"],
    entities : {
        1 : {
            id : "1",
            text: "Update homework.",
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
        },
        ToggleTodo(state, action) {
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
        },
        //use key
        DeleteTodo(state, action){
            todoAdapter.removeOne(state, action.payload);
        }
    }
})

export const {AddToDo, ToggleTodo, DeleteTodo} = todosSlice.actions;
export default todosSlice.reducer;
export const {selectIds : selectTodoIds , selectById : selectTodoItemId } = todoAdapter.getSelectors(state => state.todoList);
