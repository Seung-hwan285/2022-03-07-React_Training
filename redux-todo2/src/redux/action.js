import React from "react";
export const addTodo =(todo)=>({
        type:'ADD',
        todo:{
            id: todo.id,
            title : todo.title,
            bool : todo.bool,
        }
});


export const deleteTodo=(id)=>({


   type:'DELETE',
   todo:{
       id,
   }
});


export const TodoUpdate=(id,text)=>({


   type :'UPDATE',
   todo : {
       id : id,
       title : text,
   }
});