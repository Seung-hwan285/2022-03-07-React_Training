import React, {useState} from "react";
import EditModal from "./EditModal";

const CreateItem = (props) => {
    const handlerItemId =()=>{
        props.onDeleteItemId(props.id);
    }

    // 수정버튼 누르면 모달창 나오게


    const [newItem , setNewItem]=useState(props.item);

    const handlerInput =(e)=>{
        setNewItem(e.target.value);
    }


    const handlerItemChange=()=>{

        return <div className="modal-container">
                <div className="text">
                    fds
                    <input type="text"  onChange={handlerInput} className="input" placeholder="Enter you todo"/>
                </div>
        </div>

    }


    console.log(props.bool);
    const [bool,setBool]=useState(props.bool);
    console.log(bool);
    const openModal=()=>{

        setBool(true);

    }

    console.log(bool);


    // ture, false를 modal창 컴포넌트에 보내야함
    return(
        <span className="text">
            {props.item}
            <button className="btn" onClick={handlerItemId}>삭제</button>
            <button className="btn" onClick={openModal}>수정</button>
            <EditModal onModal={bool}/>
        </span>
    )
}

export default CreateItem;