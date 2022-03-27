import React, {useState} from "react";


const TodoResults=(props)=>{

    console.log(props.data);
    return(
            <ul>
                {props.data.map(($el)=>(
                    <li key={$el.id}>{$el.item}</li>
                ))}
            </ul>
    );
}

export default TodoResults;
