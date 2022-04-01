import CreateItem from "./CourseGoalItem";
import React, {useEffect, useState} from "react";
import "../../ui/modules/modal.css"
const EditModal=(props)=>{

    const {open} = props;


    const [modal,setOpen]= useState(open);

    useEffect(()=>{
        setOpen(open);
    },[open])


    const [modalItem , setNewItem]=useState('');

    const handlerInput =(e)=>{
        e.preventDefault();
        setNewItem(e.target.value);

    }

    const todoSubmit=(e)=>{
        e.preventDefault();

        props.data(modalItem);
        setOpen(false);
    }

    // 입력이 들어오면 false로 변경되게


    return(
        <div >
            <form onSubmit={todoSubmit}>
                <input type="text"   onChange={handlerInput} className={modal ? "modal-input" :"modal-close"} placeholder="Enter you todo"/>
            </form>
        </div>
    )
}

export default EditModal;