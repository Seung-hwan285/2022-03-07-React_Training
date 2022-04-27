import React, {useState} from "react";
import Card from "./Card";
import Button from "../Users/Button";
const ErrorModal = (props)=>{


    return <Card>
        {props.message}

        <h2>{props.title}</h2>

        <button onClick={props.onConfirm}>okay</button>


    </Card>
};

export default ErrorModal;