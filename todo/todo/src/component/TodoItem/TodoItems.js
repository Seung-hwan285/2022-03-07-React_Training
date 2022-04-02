import React, {useState} from "react";
import "../../ui/modules.css"
import Content from "../Title/Content";


import TodoResults from "./ContentResults";
import ContentResults from "./ContentResults";
import CreateItem from "./CourseGoalItem";
import CountItem from "../Title/CountItem";

const TodoItems=()=>{

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



    console.log(list);
    return (
        <div className="todoItems-container">
            <Content onFormData={resultInput}/>
            <CountItem items={list}/>
            <TodoResults items={list}  onDeleteItemId={handlerId}/>

        </div>
    );

}

export default TodoItems;