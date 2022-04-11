import React, {useRef, useState} from "react";
import {AddButton, Input, TodoInputBox} from "./Template";
import {useDispatch} from "react-redux";
import {todoInsert} from "../common/Todo";


const TodoInput=()=>{


    const [input,setInput]= useState('');
    let nextId = useRef(2);


    const dispatch = useDispatch();

    const addTodo=()=>{
        if(input.length===0){
            alert("문자를 입력해주세요");
            return;
        }

        dispatch(todoInsert(nextId.current , input));
        
        nextId.current+=1;
        setInput("");
    }


    const onChangeInput=(e)=>{
        console.log(e.target.value);
    }

    return(
        <TodoInputBox>

            <Input
                onChange={onChangeInput}
                placeholder="할 일을 입력해주세요"
            />
            
            <AddButton onClick={addTodo}>추가</AddButton>


        </TodoInputBox>
    )
}

export default TodoInput;