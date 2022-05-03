import React, {useReducer, useState} from "react";
import './App.css';
import Student from "./component/Student";

const reducer =(state,action)=>{


    if(action.type ==='add'){
        const name = action.payload.name;



        const newStudent={
            id:Date.now(),
            name,
            isHere:false,
        }


        return{
            count : state.count+1,
            students: [...state.students , newStudent],
        }
    }
}

const initState={

    count : 0,
    students:[
        {
            id : Date.now(),
            name : 'James',
            isHere :false,
        }
        ]
}

function App() {

    const [name,setName]=useState('');


    const [studentInfo, dispatch]= useReducer(reducer,initState);



    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수: {studentInfo.count}</p>

            <input
                type="text"
                placeholder="이름을 입력"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            
            <button
                onClick={()=>{
                    dispatch({type:'add',payload:{name}})
                }}
            >추가</button>


            {studentInfo.students.map(($el)=> {
                console.log($el)
                return(<Student name={$el.name}/>)

            })}
        </div>
    );
}

export default App;
