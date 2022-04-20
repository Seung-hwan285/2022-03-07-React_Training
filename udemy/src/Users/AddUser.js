import "../App.css"
import Card from "../UI/Card";
import  "../module.css"
import React, {useState} from "react";
import Button from "./Button";



const AddUser=(props)=>{

    const [userName,setUserName]=useState('');
    const [userAge, setUserAge]=useState('');

    const handlerAdd=(e)=>{
            e.preventDefault();

            console.log(userAge,userName);

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


    return(

        <Card>
        <form onSubmit={handlerAdd} className="form-container">
            <label className="username">UserName</label>
            <input id="username" type="text" onChange={handlerUserName}/>
            <label className="text-label">Age(Years)</label>
            <input id="age" type="text" onChange={handlerUserAge}/>
            <Button/>
        </form>
        </Card>
    )
}
export default AddUser;