import React, {useCallback, useState} from "react";

import {useDispatch} from "react-redux";
import {deleteTodo, TodoUpdate, updateTodo} from "../redux/action";

import './input.css';
import {TextBox} from "./inputStyle";

const TodoItem=({todo})=>{

    const {id , title , bool} =todo;
    const dispatch = useDispatch();
    const [readOnly,setReadOnly]= useState(true);

    const [updateText, setUpdateText]=useState(title);



    const handlerDelete=()=>{
        console.log(id);
        dispatch(deleteTodo(id));
    }

    const updateTodo=()=>{

        if(readOnly){
            setReadOnly(false);
        }else{
            setReadOnly(true);
        }

        console.log(readOnly)
    }

    return(

        <div>
          <TextBox
              defaultValue={title}
              // 처음에 수정못하게 input 읽기모드로 만들어줌
              readOnly = {readOnly}
              checked={bool}
              name="text"
              onBlur={()=>dispatch(TodoUpdate(id,updateText))}
          />

            <button
            onClick={handlerDelete}
            >삭제</button>


            {!bool ?(
                <button
                onClick={updateTodo}
                >
                수정
            </button>): (<></>)}
        </div>
    )
}

export default TodoItem;