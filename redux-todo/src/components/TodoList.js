import {useSelector} from "react-redux";
import {ContainerList} from "../styled/Template";
import TodoItem from "./TodoItem";
import React from "react";
const TodoList=()=>{

    const todos = useSelector((state) => state.todos);
    return(
        <ContainerList>
            {todos.map((todo) => (
                <TodoItem key={todo.id}  todo={todo} />
            ))}
        </ContainerList>
    );
}

export default TodoList;

