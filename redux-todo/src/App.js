import React, {useReducer, useState} from "react";
import './App.css';
import Student from "./component/Student";
import student from "./component/Student";


const reducer=(state,action)=>{


    if(action.type==='add'){

        const name = action.payload.name;


        const newS={
            id : Date.now(),
            name,
            bool:false,
        }
        return{
            count : state.count +1,

            students: [...state.students ,newS],
        }
    }

    if(action.type==='delete'){

        console.log(action.payload.p_id)

        return{

            count: state.count-1,
            students: state.students.filter(
                ($el)=>$el.id !== action.payload.p_id),
        };
    }


    if(action.type==='mark-line'){
        console.log(action.payload.p_id);
    return{
        count : state.count,



        students: state.students.map(($el)=>{
            if($el.id === action.payload.p_id){
                return {...$el , bool : !$el.bool}
            }
        })

    };
    }

}

const initState={

        count : 0,
        students:[]
}

function App() {

    const [name,setName]=useState('');

    const [studentInfo, dispatch]=useReducer(reducer,initState);

    const onReset =()=>{
        setName('');
    }

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
                    {onReset()}
                    dispatch({type:'add',payload:{name}})
                }}
            >추가</button>


            {studentInfo.students.map(($el)=>{


                return(
                    <Student
                        key={$el.id}
                        name={$el.name}
                        dispatch={dispatch}
                        p_id={$el.id}
                        bool={$el.bool}
                    />
                )
            })}

        </div>
    );
}

export default App;
