import api from "./api";

export const getToDos = () => {
    return api.get("/todos");
};

export const addToDo = (text) => {
    return api.post("/todos", {text});
};

export const updateToDo = (id, data) => {
    return api.put(`/todos/${id}`, data)
}

export const deleteToDo = (id) => {
    return api.delete(`/todos/${id}`);
}