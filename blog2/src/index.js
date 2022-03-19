import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

function Example() {

    // 배열 구조화를 통해서 2개의 변수를 만든다
    // 여기서 setCount가 this.setState가 되는 것이다.
    // count는 출력용
    const [count, setCount] = useState(0); // 1. 훅 생성

    return (
        <div>
            {ExampleManyState()}
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                clicks

            </button>

        </div>
    );
}

function ExampleManyState() {

    const [age,setAge]= useState(42);

    return(
        <div>
            <p title={()=>setAge(age+1)}></p>

            <p> {age}</p>

        </div>
    )
}

ReactDOM.render(
    <Example/>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
