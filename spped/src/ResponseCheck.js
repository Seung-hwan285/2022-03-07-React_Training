import {useRef, useState} from "react";

import React from "react";
import './App.css';

const ResponseCheck =()=>{

    const [value,setValue]=useState('waiting');

    const [message,setMessage]=useState('클릭');
    const [result,setResult]=useState([]);


    const startTime = useRef();
    const endTime = useRef();



    const onClickScreen =()=>{

        // 파란화면일때 클릭하는경우
        // 준비하세요 -> 빨간화면이 나와야함
        if(value === 'waiting'){
            setValue('ready');
            setMessage('초록색이 되면 클릭');

            setTimeout(()=>{
                setValue('now');
                setMessage('지금 클릭');


                startTime.current =new Date();

                console.log(startTime)
            },Math.floor(Math.random()*1000)+2000);
        }
        // 성급하게 클릭
        else if(value==='ready'){
            setValue('waiting');
            setMessage('너무 성급하세요!');
        }
        else if(value==='now'){ // 반응속도 체크


            endTime.current= new Date();

            setValue('waiting');
            setMessage('클릭해서 시작하세요');


            console.log(endTime)

            setResult((prevState=>[...prevState,  endTime.current - startTime.current]));
        }

    }


    const onReset=()=>{

        setResult([]);
    }

    const renderAverage=()=>{

        return result.length ===0 ? null : <div>평균시간 : {result.reduce((a,b)=>a+b) / result.length}

        <button onClick={onReset}>리셋</button>
        </div>



    };


    return(
        <>
        <div
            id="screen"
            className={value}
            onClick={onClickScreen}
        >
            {message}
        </div>

            {renderAverage()}
        </>



    );



}

export default ResponseCheck;