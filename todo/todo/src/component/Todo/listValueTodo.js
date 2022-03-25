import React, {useState} from "react";


const ListValueTodo=(props)=>{

    console.log(props.data);


    return(
            <ul>
                {props.data.map(($el)=>(
                    <li key={$el.id}>{$el.item}</li>
                ))}
            </ul>
    )
}

export default ListValueTodo;
