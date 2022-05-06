import React from "react";
import TodoList from "./TodoList";

const TodoItem=({todo})=>{



    const {id , title , bool} =todo;

    return(

        <div>
            <span>{title}</span>
            <button>삭제</button>
        </div>
    )
}

export default TodoItem;