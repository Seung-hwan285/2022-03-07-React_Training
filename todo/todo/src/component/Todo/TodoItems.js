import React, {useState} from "react";
import "../../ui/Todo.css"
import FormTodo from "./Content";

import TodoResults from "./ContentResults";
import Content from "./Content";

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
            <Content onFormData={resultInput}/>
            <TodoResults data={list} />
        </div>
    );

}

export default TodoItems;