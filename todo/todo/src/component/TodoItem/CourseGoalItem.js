import React, {useCallback, useEffect, useState} from "react";
import EditModal from "./EditModal";

const CreateItem = (props) => {
    const handlerItemId =()=>{
        props.onDeleteItemId(props.id);
    }

    const [newItem , setNewItem]=useState(props.item);

    const [modalOpen ,setOpen] = useState(false);

    const [checkItem,setCheckItem] =useState(props.checked);



    const handlerOpenModal = () => {
        setOpen(true);
    };

    // 수정버튼 누르면 체크박스 false로 변경해야함

    const handlerModalData=(e)=>{

        setCheckItem(false);
        setNewItem(e);


        console.log(props)

    }




    const handlerItemClick=(e)=>{

        //true 면 아래 실행
        if(checkItem){
            setCheckItem(false);
        }else{
            setCheckItem(true);

        }
        // item.style.cssText="text-decoration: line-through";

    }

    return(
        <span className="text">
            <span className={checkItem ? "item-check":"item" } onClick={handlerItemClick}>{newItem}</span>
            <button className="btn" onClick={handlerItemId}>삭제</button>
            <button className="btn" onClick={handlerOpenModal}>수정</button>
            <EditModal open ={modalOpen} data={handlerModalData}/>
        </span>
    )
}

export default CreateItem;