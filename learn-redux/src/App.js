import './App.css';

import React from 'react';
import {createStore} from "redux";
import {Provider, useDispatch, useSelector} from "react-redux";

// 2개 파라미터 받음
function reducer(current , action) {

    // input으로 받은 aciton을 처리

    if(current === undefined){
       return{
           number :1,
       };
    }

    const newState = {...current};

    if(action.type ==='PLUS'){
        newState.number++;
    }
    // 과거 객체를 복제
    return newState;
}

//store 생성 -> 리듀서를 반드시 주입해야함
// store안에 state를 어떻게 바꿀것지 해주는 역할 리듀서서
const store =createStore(reducer);

function App() {

    return (
      <div className="App">

          <h1>Root</h1>

          {/*이렇게 만듬으로써 밑에 Left1 , Right1 컴포넌트는 store를 사용할수 있게 되었다*/}
          <Provider store={store}>
          <div id="grid">
            <Left1/>
            <Right1/>
          </div>
          </Provider>
      </div>
  );
}

function Left1(props){
    return(
        <div>
            Left
        <Left2/>
        </div>
    )
}

function Left2(props) {


    const number = useSelector((state => state.number));
    return(
        <div>
            Left {number}
            <Left3/>
        </div>
    )
}

function Left3(props) {

    return(
        <div>
            Left3

        </div>
    )
}



function Right1(props) {

    return(
        <div>

            Right1

            <Right2 onIncrease={()=>{

            }}/>
        </div>
    )
}

function Right2(props){
    return(
        <div>
            Right2

            <Right3 onIncrease={()=>{

            }}/>
        </div>
    )
}

function Right3(props) {
    const dispatch = useDispatch();
    return(
        <div>
            Right3

             {/*action을 dispacher에게  송신*/}
            <input type="button" value="+" onClick={()=>{
                    dispatch({
                        type: 'PLUS',
                    });
            }}/>
        </div>
    )
}

export default App;
