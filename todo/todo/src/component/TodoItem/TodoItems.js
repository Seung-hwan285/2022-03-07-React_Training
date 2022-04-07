import React, {useState} from "react";
import "../../ui/modules.css"
import Content from "../Title/Content";


import TodoResults from "./ContentResults";

import CountItem from "../Title/CountItem";
import Timer from "../../Time/Timer";



const TodoItems=(props)=>{

    const [list,setList]=useState([
        {
            id:1,
            item : '할일1',
            bool : false,
            checked : false,
        },
    ]);

    const resultInput =(obj)=>{
        setList((prevState=>{
            return [...prevState , obj];
        }));
    }


    const handlerId=(id)=>{
        setList((prevState => {
            return prevState.filter(($el)=>$el.id !==id);
        }));
    }

    const handlerHour=(e)=>{
        props.onHour(e);
    }



    return (
        <div className="todoItems-container">
            <Content onFormData={resultInput}/>
            <Timer onHour={handlerHour}/>
            <CountItem items={list}/>
            <TodoResults items={list}  onDeleteItemId={handlerId}/>

        </div>
    );

}

export default TodoItems;