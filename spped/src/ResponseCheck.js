import {useRef, useState} from "react";

import React from "react";
import './App.css';

const ResponseCheck =()=>{

    const [value,setValue]=useState('waiting');

    const [message,setMessage]=useState('클릭');
    const [result,setResult]=useState([]);

    // [x] 클릭했을때 빨간색 배경화면이 나와야함
    // [x] setTimeOut 걸어서 초록색 화면 나오게 2~3초뒤
    // [x] 성급하게 클릭했을때 초록색화면

    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen =()=>{

        if(value==='waiting'){
            setMessage('초록색이 되면 클릭하세요');
            setValue('ready');

            setTimeout(()=>{

                setValue('now');
                setMessage('지금 클릭');

                startTime.current=new Date();
            },Math.floor(Math.random()*1000)+2000);
        }

        else if(value==='ready'){

            setValue('waiting');
            setMessage('성급하게 클릭!');

        }


        else if(value==='now'){ // 반응속도 체크
            setValue('waiting');
            setMessage('클릭해서 시작하세요');
            endTime.current = new Date();

            setResult((prevState => [...prevState, endTime.current-startTime.current]));
        }

    }

    const onReset=()=>{
        setResult([]);
    }

    const renderAverage=()=>{


        return result.length ===0  ? null : <div>평균시간 : {result.reduce((a,b)=>a+b) / result.length}
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