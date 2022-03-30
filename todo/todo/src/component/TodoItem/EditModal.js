import CreateItem from "./CourseGoalItem";
import React, {useEffect, useState} from "react";
import "../../ui/modules/modal.css"
const EditModal=(props)=>{

    const [modal,setModal]=useState(false);

    useEffect(()=>{
            setModal(props.onModal);

    },[props]);

    console.log(modal)

    const [newItem , setNewItem]=useState('');

    const handlerInput =(e)=>{
        e.preventDefault();
        setNewItem(e.target.value);

    }

    const todoSubmit=(e)=>{
        e.preventDefault();
        setNewItem('');

        setModal(false);

    }

    return(
        <div>
            <form onSubmit={todoSubmit}>
                <input type="text" value={newItem}   onChange={handlerInput} className={modal ? "modal-input" :"modal-close"} placeholder="Enter you todo"/>
            </form>
        </div>
    )
}

export default EditModal;