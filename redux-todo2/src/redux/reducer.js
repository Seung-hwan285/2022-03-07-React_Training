import React from "react";

const initState={
    todos: [],
}

const reducer=(state=initState, action)=>{

    switch (action.type){
        case 'ADD':

            return {
                todos: [...state.todos , action.todo],
            }

        default:
            return state;
    }
}

export default reducer;