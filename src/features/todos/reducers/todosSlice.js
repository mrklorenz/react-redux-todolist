import { createEntityAdapter, createSlice , createSelector} from "@reduxjs/toolkit";

const todoAdapter = createEntityAdapter();

const initialState = todoAdapter.getInitialState();

const todosSlice = createSlice({
    name: "todos",
    initialState : initialState,
    reducers: {
        AddToDo(state, action){
            todoAdapter.addOne(state, action.payload);
        },
        ToggleTodo(state, action) {
            console.log(action.payload);
            todoAdapter.updateOne(state, {
                id : action.payload,
                changes : action.payload.updateToDo
            })
        },
        DeleteTodo(state, action){
            todoAdapter.removeOne(state, action.payload);
        },
        AddToDoList(state, action){
            todoAdapter.addMany(state, action.payload);
        }
    }
})

export const {AddToDo, ToggleTodo, DeleteTodo, AddToDoList} = todosSlice.actions;
export default todosSlice.reducer;
export const {selectAll : selectTodos, selectIds : selectTodoIds , selectById : selectTodoItemId } = todoAdapter.getSelectors(state => state.todoList);
export const selectDoneItems = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.done));