import logo from './logo.svg';
import './App.css';
import TodoItems from "./component/TodoItem/TodoItems";

import {useEffect, useState} from "react";
import Form from "./component/Weather/Form";
import Timer from "./Time/Timer";
import {hasPointerEvents} from "@testing-library/user-event/dist/utils";



function App() {


    const [h,setH]=useState('');
    let hour='';

    const handlerTime=(e)=>{
        setH(e);
    }


    const num = h.replace(/[^0-9]/g,'');

    console.log(num)

    // 이쪽으로 hour을 가져와야함
  return (
    <div className={num < 18 ? "App-AM":"App-PM"}>

        <Form/>
        <TodoItems onHour={handlerTime}/>

    </div>
  );
}

export default App;
