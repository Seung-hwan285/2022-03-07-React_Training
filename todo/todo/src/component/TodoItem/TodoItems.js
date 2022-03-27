import React, {useState} from "react";
import "../../ui/modules.css"
import Content from "../Title/Content";


import TodoResults from "./ContentResults";

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
        console.log(obj)
        setList((prevState=>{
            console.log(prevState);
            return [...prevState , obj];
        }));
    }


    const handlerDeletItem=(id)=>{
        console.log(id)
        setList((prevState => {
            return prevState.filter(($el) => $el.id !== id);
        }))
        console.log(list);
    }


    return (
        <div className="todoItems-container">
            <Content onFormData={resultInput}/>
            <TodoResults items={list} onDeleteItem={handlerDeletItem} />

        </div>
    );

}

export default TodoItems;