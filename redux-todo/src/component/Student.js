import React, {useState} from "react";
const Student=({name,dispatch,p_id,bool})=>{


    return(
        <div>
            <span
                style={{
                textDecoration : bool ? 'line-through' : 'none',
                color : bool ? 'grey' : 'black',
            }}
            onClick={()=>{
                dispatch({type:'mark-line',payload:{p_id}});
            }}
            >
                {name}
            </span>

            <button
            onClick={()=>{
                dispatch({type: 'delete',payload : {p_id}});
            }}

            >삭제</button>
        </div>
    )
}

export default Student;