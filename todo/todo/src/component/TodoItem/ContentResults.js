import React, {useState} from "react";
import Button from "./Button";


// 삭제 수정 버튼도 만들기
// [] 삭제 버튼
// [] 수정 버튼
const TodoResults=(props)=>{

    console.log(props.data);
    return(
            <ul className="ui-container">
                {props.data.map(($el)=>(
                    <li key={$el.id}>{$el.item}


                        <Button/>
                    </li>

                ))}


            </ul>
    );
}

export default TodoResults;
