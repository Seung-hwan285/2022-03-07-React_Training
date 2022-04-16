import "../App.css"
import Card from "../UI/Card";
import  "../module.css"
import React from "react";



const AddUser=()=>{

    const handlerAdd=(e)=>{
            e.preventDefault();
    }

    return(

        <Card>
        <form onSubmit={handlerAdd} className="form-container">
            <label className="username">UserName</label>
            <input id="username" type="text"/>
            <label className="text-label">Age(Years)</label>
            <input id="age" type="text"/>

            <button>Add User</button>
        </form>
        </Card>
    )
}
export default AddUser;