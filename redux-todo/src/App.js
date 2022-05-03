import React, {useReducer, useState} from "react";
import './App.css';
import Student from "./component/Student";
import student from "./component/Student";


const reducer=(state,action)=>{


    if(action.type==='add'){

        const name = action.payload.name;


        const newS={
            count : Date.now(),
            name,
            bool:false,
        }
        return{
            count : state.count +1,

            students: [...state.students ,newS],
        }
    }

    if(action.type==='delete'){
        return{
            count: state.count-1,
            students: state.students.filter(($el)=>$el.id !== action.id),

        };
    }
}

const initState={

        count : 0,

        students:[{
            id: Date.now(),
            name : 'James',
            bool: false,
        }]

}

function App() {

    const [name,setName]=useState('');

    const [studentInfo, dispatch]=useReducer(reducer,initState);


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


            {studentInfo.students.map(($el)=>{
                return(
                    <Student
                        key={$el.id}
                        name={$el.name}

                        dispatch={dispatch}
                        id={$el.id}
                    />
                )
            })}

        </div>
    );
}

export default App;
