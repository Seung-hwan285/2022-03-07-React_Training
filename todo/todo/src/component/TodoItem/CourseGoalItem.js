import React, {useCallback, useEffect, useState} from "react";
import EditModal from "./EditModal";

const CreateItem = (props) => {
    const handlerItemId =()=>{
        props.onDeleteItemId(props.id);
    }

    const [newItem , setNewItem]=useState(props.item);

    const [modalOpen ,setOpen] = useState(false);

    const [checkItem,setCheckItem] =useState(props.checked);



    const openModal = () => {
        setOpen(true);
    };

    // 수정버튼 누르면 체크박스 false로 변경해야함

    const handlerModalData=(e)=>{

        setCheckItem(false);
        setNewItem(e);


        console.log(props)

    }




    // chekc 구현
    // [x] item 클릭했을때 값 나오게
    // [x] item 클릭 했을때 item.checked 가 false면 true로 변경하고 현재 아이템에 css추가
    // [x] item 클릭 했을때 item.checked 가 true 면  fasel로 변경하고 css추가

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
            <span className={checkItem ? "item-check":""} onClick={handlerItemClick}>{newItem}</span>
            <button className="btn" onClick={handlerItemId}>삭제</button>
            <button className="btn" onClick={openModal}>수정</button>
            <EditModal open ={modalOpen} data={handlerModalData}/>
        </span>
    )
}

export default CreateItem;