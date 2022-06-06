import {useState} from "react";

import React from "react";
import './App.css';

const ResponseCheck =()=>{

    const [value,setValue]=useState('waiting');

    const [message,setMessage]=useState('클릭');
    const [result,setResult]=useState([]);



    const onClickScreen =()=>{



        // 파란화면일때 클릭하는경우
        // 준비하세요 -> 빨간화면이 나와야함
        if(value === 'waiting'){
            setValue('ready');
            setMessage('초록색이 되면 클릭');
        }else{
            setValue('waiting');
            setMessage('클릭')
        }
    }



    const renderAverage=()=>{

        const {result} = value;

        return result.length ===0 ? null : <div>평균시간 : {result.reduce((a,b)=>a+b) / result.length}</div>

    };


    return(
        <div
            id="screen"
            className={value}
            onClick={onClickScreen}
        >
            {message}

            {}
        </div>

    );



}

export default ResponseCheck;