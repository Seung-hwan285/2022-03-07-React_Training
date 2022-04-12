import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {InputBox} from "../styled/Template";
const InputForm=()=>{
    const dispatch = useDispatch();

    const [text,setText]=useState("");


    const handlerChange=(e)=>{
        setText(e.target.value);

        console.log(text)
    }

    return(
        <div>
            <InputBox

            onChange={handlerChange}
            />
        </div>
    )
}

export default InputForm;