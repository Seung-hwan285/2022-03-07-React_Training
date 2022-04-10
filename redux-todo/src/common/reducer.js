import {initState, TODO_INSERT, TODO_REMOVE, TODO_TOGGLE, TODO_UPDATE} from "./Todo.js";

export default function todoReducer(state = initState, { type, payload }) {
    switch (type) {
        case TODO_INSERT:
            return {
                ...state,
                todos: state.todos.concat({
                    id: payload.id,
                    text: payload.text,
                    isCompleted: false,
                }),
            };
        case TODO_REMOVE:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== payload.id),
            };
        case TODO_UPDATE:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === payload.id ? { ...todo, text: payload.text } : todo
                ),
            };
        case TODO_TOGGLE:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === payload.id
                        ? { ...todo, isCompleted: !todo.isCompleted }
                        : todo
                ),
            };
        default:
            return { ...state };
    }
}