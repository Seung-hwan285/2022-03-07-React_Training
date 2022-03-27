import React from "react";

const CreateItem = (props) => {


    const deleteItem=()=>{
        props.onDelete(props.id);
    };

    return(
        <span className="text">
            {props.item}

            <button className="btn" onClick={deleteItem}>삭제</button>
            <button className="btn">수정</button>
       </span>
    )
}

export default CreateItem;