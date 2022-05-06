import React from "react";
import TodoList from "./TodoList";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../redux/action";

const TodoItem=({todo})=>{

    const {id , title , bool} =todo;
    const dispatch = useDispatch();



    const handlerDelete=()=>{


        console.log(id);
        dispatch(deleteTodo(id));
    }



    return(

        <div>
            <span>{title}</span>
            <button
            onClick={handlerDelete}
            >삭제</button>
        </div>
    )
}

export default TodoItem;