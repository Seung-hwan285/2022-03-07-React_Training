import React, {useState} from "react";
const Student=({name,dispatch,p_id})=>{




    return(
        <div>
            <span>{name}</span>
            <button
            onClick={()=>{
                dispatch({type: 'delete',payload : {p_id}});
            }}

            >삭제</button>
        </div>
    )
}

export default Student;