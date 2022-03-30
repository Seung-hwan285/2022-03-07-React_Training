import CreateItem from "./CourseGoalItem";
import React, {useEffect, useState} from "react";
import "../../ui/modules/modal.css"
const EditModal=(props)=>{


    const {open,close} = props;
    console.log(open);

    const [modal,setOpen]= useState(open);

    useEffect(()=>{
        setOpen(open);
    },[open])
    console.log(modal);

    const [newItem , setNewItem]=useState('');

    const handlerInput =(e)=>{
        e.preventDefault();
        setNewItem(e.target.value);

    }

    const todoSubmit=(e)=>{
        e.preventDefault();
        setNewItem('');
        setOpen(false);
    }

    // 입력이 들어오면 false로 변경되게


    return(
        <div >
            <form onSubmit={todoSubmit}>
                <input type="text" value={newItem}   onChange={handlerInput} className={modal ? "modal-input" :"modal-close"} placeholder="Enter you todo"/>
            </form>
        </div>
    )
}

export default EditModal;