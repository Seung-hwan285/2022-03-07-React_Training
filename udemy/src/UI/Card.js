import classes from "../module.css"
import React from "react";
import "../App.css"



const Card =(props)=> {
    return <div className="card">
        {props.children}
    </div>
}

export default Card;