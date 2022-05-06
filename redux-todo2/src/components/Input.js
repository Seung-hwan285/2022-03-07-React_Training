
import React, {useState} from "react";
import "./input.css";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/action";


const Input=()=>{

    const [text,setText]=useState('');


    const dispatch = useDispatch();


    const handlerAdd=(name)=>{
        setText(name);

    }

    const handlerClick=()=>{

        const newTodo={
            id:Date.now(),
            title : text,
            bool:false,
        };

        dispatch(addTodo(newTodo));

        setText('');
    }


    return(
        <div className="input">
            <input
                type="text"
                value ={text}
                placeholder="할 일 입력"
                onChange={(e)=>handlerAdd(e.target.value)}
            />
            <button onClick={handlerClick}>추가</button>

        </div>



    )
}

export default Input;