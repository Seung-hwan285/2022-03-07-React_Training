import React from "react";
export const addTodo =(todo)=>({
        type:'ADD',
        todo:{
            id: todo.id,
            title : todo.title,
            bool : todo.bool,
        }
    });


