import React from "react";
const Student=({name,dispatch,id})=>{



    return(
        <div>
            <span>{name}</span>
            <button
            onClick={()=>{
                dispatch({type: 'delete',payload : {id}});
            }}

            >삭제</button>
        </div>
    )
}

export default Student;