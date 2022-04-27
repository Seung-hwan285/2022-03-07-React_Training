import "../App.css"
import Card from "../UI/Card";
import  "../module.css"
import React, {useState} from "react";
import Button from "./Button";
import ErrorModal from "../UI/ErrorModal";



const AddUser=(props)=>{

    const [userName,setUserName]=useState('');
    const [userAge, setUserAge]=useState('');

    const [Error , setError]=useState('');

    const handlerAdd=(e)=>{
            e.preventDefault();

            console.log(userAge,userName);

            if(userAge.trim().length===0){
                setError({
                    title: 'not input',
                    message : 'not'
                });

                return;
            }

            else if(userName.trim().length===0){
                setError({
                    title:'not id input',
                    message :'not',
                });
                return;
            }

            const obj={
                id : Math.random(),
                name : userName,
                age : userAge,
            }
            props.onData(obj);
    }


    const handlerUserName =(e)=>{
        setUserName(e.target.value);
    }

    const handlerUserAge=(e)=>{
        setUserAge(e.target.value);
    }

    const handlerModal=(e)=>{
        setError(null);
    }

    return(

        <div>

        <Card>
            {Error && (<ErrorModal title={Error.title} message={Error.message} onConfirm={handlerModal}/>)}
        <form onSubmit={handlerAdd} className="form-container">
            <label className="username">UserName</label>
            <input id="username" type="text" onChange={handlerUserName}/>
            <label className="text-label">Age(Years)</label>
            <input id="age" type="text" onChange={handlerUserAge}/>
            <Button/>
        </form>
        </Card>
        </div>
    )
}
export default AddUser;