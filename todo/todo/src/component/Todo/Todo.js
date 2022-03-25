import React, {useState} from "react";
import "./Todo.css"
import FormTodo from "./FormTodo";
import ListValueTodo from "./listValueTodo";

const Todo=()=>{



    const [list,setList]=useState([
        {
            id:1,
            item : '할일1',

        },
        {
            id:2,
            item : '할일2',
        },
    ]);


    const resultInput =(value)=>{

    }


    
    return (
        <div>
            <FormTodo onFormData={resultInput}/>
            <ListValueTodo data={list} />

        </div>
    )



}

export default Todo;