import React, {useEffect, useState} from "react";
import EditModal from "./EditModal";

const CreateItem = (props) => {
    const handlerItemId =()=>{
        props.onDeleteItemId(props.id);
    }

    const [newItem , setNewItem]=useState(props.item);

    const [modalOpen ,setOpen] = useState(false);


    const openModal = () => {
        setOpen(true);
    };


    const handlerModalData=(e)=>{
        setNewItem(e);
    }

    // chekc 구현
    // [x] item 클릭했을때 값 나오게
    // [x] 클릭했을때 안에 css가 있으면 해제 , 없으면 추가

    const handlerItemClick=(e)=>{

        const item = e.target;

        if(!item.className.includes('check')){
            item.classList.add('item-check')
            console.log(item);
        }else{

            item.classList.remove('item-check');
            console.log(item);
        }

        // item.style.cssText="text-decoration: line-through";

    }

    return(
        <span className="text">
            <span className="item" onClick={handlerItemClick}>{newItem}</span>
            <button className="btn" onClick={handlerItemId}>삭제</button>
            <button className="btn" onClick={openModal}>수정</button>
            <EditModal open ={modalOpen} data={handlerModalData}/>
        </span>
    )
}

export default CreateItem;