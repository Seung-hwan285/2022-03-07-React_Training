import React, {useState} from "react";
import "./Todo.css"
import FormTodo from "./FormTodo";

const Todo=()=>{



    const resultInput =(e)=>{
        console.log(e);
    }

    return(
        <FormTodo onFormData ={resultInput}/>
    )

}

export default Todo;