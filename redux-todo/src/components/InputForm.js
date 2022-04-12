import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, InputBox} from "../styled/Template";
import {add_todo} from "../commons/actions";
const InputForm=()=>{
    const dispatch = useDispatch();

    const [text,setText]=useState("");


    const handlerChange=(e)=>{
        setText(e.target.value);

        console.log(text)
    }


    const handlerClick=()=>{
        const todo={
            title :text,
            isComplete: false,
        };

        dispatch(add_todo(todo));

        setText("");
    }
    return(
        <div>
            <InputBox
                onChange={handlerChange}
            />

            <Button onClick={handlerClick}>추가</Button>
        </div>
    )
}

export default InputForm;