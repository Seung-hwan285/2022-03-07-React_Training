import React, {Component} from 'react'

import ExpenDate from "./component/Expenses/ExpenDate";
import ExpenRenderDate from "./component/Expenses/ExpenRenderDate";
import NewExPense from "./component/NewExpenses/NewExPense";


const App =()=>{

    const expen=[
        {
            title: 'Car Insurance',
            amount : 29.54,
            date : new Date(2021,2,26),
        },
        {
            title: 'Boat Insurance',
            amount : 30.54,
            date : new Date(2024,1,11),
        },
        {
            title: 'Test Insurance',
            amount : 40.54,
            date : new Date(1999,4,9),
        },

    ]

    const handlerFormData=(expen)=>{

        console.log(expen);
    }

    return(
        <div>
            {/*props로 함수 전달*/}
            <NewExPense onFormData ={handlerFormData}/>
            {/*props로 객체 전달*/}
            <ExpenRenderDate data={expen}/>
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
//         },
//             {
//                 title: 'Boat Insurance',
//                 amount : 30.54,
//                 date : new Date(2021,2,26)
//             },
//
//             {
//                 title: 'Hwan Insurance',
//                 amount :40.54,
//                 date : new Date(2004,3,2)
//             },
//
//         ];
//
//         this.NewExpenseResult =this.NewExpenseResult.bind(this);
//     }
//
//     NewExpenseResult(expense){
//
//         console.log(expense);
//     }
//
//     render() {
//         return(
//             <div>
//                 <NewExPense onFomr ={this.NewExpenseResult}/>
//                 <ExpenRenderDate data={this.expen}/>
//             </div>
//         );
//     }
// }

export default App;