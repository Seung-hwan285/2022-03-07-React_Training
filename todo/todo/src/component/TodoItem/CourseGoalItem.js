import React, {useState} from "react";

const CreateItem = (props) => {

    const [newText ,setNewText] =useState(props.item);




    const handlerItemId =()=>{

        props.onDeleteItemId(props.id);

    }

    const handlerItemChange=()=>{

    }


    return(
        <span className="text">
            {props.item}
            <button className="btn" onClick={handlerItemId}>삭제</button>
            <button className="btn" onClick={handlerItemChange}>수정</button>
       </span>
    )
}

export default CreateItem;