import React, {useState} from "react";
import "../../ui/modules.css"
import FormTodo from "../Title/onContent";


import TodoResults from "./onContentResults";
import OnContent from "../Title/onContent";

const OnTodoItems=()=>{

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
        <div className="todoItems-container">
            <OnContent onFormData={resultInput}/>
            <TodoResults data={list} />

        </div>
    );

}

export default OnTodoItems;