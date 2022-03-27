import React, {useState} from "react";


// 삭제 수정 버튼도 만들기
// [] 삭제 버튼
// [] 수정 버튼
const TodoResults=(props)=>{

    console.log(props.data);
    return(
            <ul className="ui-container">
                {props.data.map(($el)=>(
                    <li key={$el.id}>{$el.item}
                        <button className="btn">삭제</button>
                        <button className="btn">수정</button>
                    </li>

                ))}


            </ul>
    );
}

export default TodoResults;
