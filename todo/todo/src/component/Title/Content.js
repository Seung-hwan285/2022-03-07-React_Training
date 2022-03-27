import React, {useState} from "react";
import "../../ui/modules/content.css"

const Content =(props)=>{

    const [value,setValue]=useState('');

    const handlerInput =(e)=>{
        setValue(e.target.value);
    }

    const todoSubmit=(e)=>{
        e.preventDefault();

        const obj = {
            id : Math.random(),
            item : value,
        };

        props.onFormData(obj);

        setValue('');
    }

    return(
        <div>

            <form onSubmit={todoSubmit}>
                <input type="text" value={value} onChange={handlerInput} className="input" placeholder="Enter you todo"/>
            </form>
        </div>

    )
}
export default Content;