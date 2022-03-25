import React, {Component, useState} from 'react'

import ExpenDate from "./component/Expenses/ExpenDate";
import ExpenRenderDate from "./component/Expenses/ExpenRenderDate";
import NewExPense from "./component/NewExpenses/NewExPense";

const App =()=>{

    const expen=[
        {
            title: 'Car Insurance',
            amount : 29.54,
            date : new Date(2021,2,26),
            id : Math.random().toString(),
        },
        {
            title: 'Boat Insurance',
            amount : 30.54,
            date : new Date(2024,1,11),
            id : Math.random().toString(),
        },
        {
            title: 'Test Insurance',
            amount : 40.54,
            date : new Date(1999,4,9),
            id : Math.random().toString(),
        },

    ];


    const [upDateExpen,setUpDateExpen]= useState(expen);


    const handlerFormData=(expnese)=>{

        setUpDateExpen((preveState)=>{

            // 새로운데이터를 이전값에 넣어줌
            // 새로운 객체 값을 기존 배열객체 요소들에 채워줌 (앞에 추가)

            return [expnese,...preveState ];

            // 기존 배열겍체에 새로운 객체 값을 추가 (뒤에 추가)
            //return [...preveState , expense]

        });
    }

    console.log(upDateExpen);
    return(
        <div>
            {/*props로 전달받아서  handlerFormData() 호출 */}
            <NewExPense onFormData ={handlerFormData}/>
            {/*props로 객체 전달*/}
            <ExpenRenderDate data={upDateExpen}/>
        </div>
    )
}

// class App extends React.Component{
//
//
//     constructor(props) {
//         super(props);
//         this.expen=[{
//             title: 'Car Insurance',
//             amount : 29.54,
//             date : new Date(2021,2,26),
//             id : Math.random().toString(),
//         },
//             {
//                 title: 'Boat Insurance',
//                 amount : 30.54,
//                 date : new Date(2021,2,26),
//                 id : Math.random().toString(),
//             },
//
//             {
//                 title: 'air Insurance',
//                 amount :40.54,
//                 date : new Date(2004,3,2),
//                 id : Math.random().toString(),
//             },
//         ];
//
//         this.state={
//            expenList  : this.expen,
//         }
//
//         this.NewExpenseResult =this.NewExpenseResult.bind(this);
//     }
//
//     // this.setState((prevState)=>({
//     //     expenList : [expnese,...prevState.expenList],
//     // }))
//
//     NewExpenseResult(expnese){
//         this.setState((prevState)=>({
//             expenList :[expnese,...prevState.expenList],
//         }))
//     }
//     render() {
//         return(
//             <div>
//                 <NewExPense onFormData={this.NewExpenseResult}/>
//                 <ExpenRenderDate data={this.state.expenList}/>
//             </div>
//         );
//     }
// }

export default App;