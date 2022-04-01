import React, {useEffect, useState} from "react";
import EditModal from "./EditModal";

const CreateItem = (props) => {
    const handlerItemId =()=>{
        props.onDeleteItemId(props.id);
    }

    // 수정버튼 누르면 모달창 나오게


    const [newItem , setNewItem]=useState(props.item);


    // const [bool,setBool]=useState(props.bool);
    const [modalOpen ,setOpen] = useState(false);


    const openModal = () => {
        setOpen(true);
    };


    // 값을 전달받음
    // 전달받은 값이랑 현재 값이랑 바꿔주기 현재값은 newItem
    const handlerModalData=(e)=>{
        setNewItem(e);

    }
    // newItem 다시 전달하기


    // ture, false를 modal창 컴포넌트에 보내야함
    return(
        <span className="text">
            {newItem}
            <button className="btn" onClick={handlerItemId}>삭제</button>
            <button className="btn" onClick={openModal}>수정</button>
            <EditModal open ={modalOpen} data={handlerModalData}/>
        </span>
    )
}

export default CreateItem;