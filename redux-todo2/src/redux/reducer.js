import React from "react";

const initState={
    todos: [],
}

const reducer=(state=initState, action)=>{


    console.log(action.todo);
    switch (action.type){
        case 'ADD':

            return {
                todos: [...state.todos , action.todo],
            }


        case 'DELETE':
            return{
                todos: [...state.todos.filter((todo)=>todo.id !== action.todo.id)],
            }

        case 'UPDATE':
            return{
                todos: [...state.todos.map((todo)=> todo.id ===action.todo.id ? {...todo, title : action.todo.title} : todo)]
            }
        default:
            return state;
    }
}


export default reducer;