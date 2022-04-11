import React from "react";
import {Template, Title} from "./Template";
import TodoInput from "./TodoInput";

const TodoTemplate=({childeren})=>{
    return(
        <Template>
            <Title>
                할일
                <TodoInput/>
            </Title>
        </Template>
    )
}





export default TodoTemplate;