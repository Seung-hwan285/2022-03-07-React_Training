import React, {useState} from "react";
import "./Todo.css"
import FormTodo from "./FormTodo";
import ListValueTodo from "./listValueTodo";
import TodoResults from "./listValueTodo";

const TodoItems=()=>{

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

    const resultInput =(obj)=>{
        setList((prevState=>{
            return [...prevState , obj];
        }));
    }

    console.log(list)
    return (
        <div>
            <FormTodo onFormData={resultInput}/>
            <TodoResults data={list} />
        </div>
    );

}

export default TodoItems;