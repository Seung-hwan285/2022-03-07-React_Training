import React, {useState} from "react";

const FormTodo =(props)=>{


    const [value,setValue]=useState('');

    const handlerInput =(e)=>{
        setValue(e.target.value);
    }

    const todoSubmit=(e)=>{
        e.preventDefault();
        props.onFormData(value);

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
export default FormTodo;