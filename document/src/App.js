import React, {Component} from 'react'

import ExpenDate from "./component/Expenses/ExpenDate";
import ExpenRenderDate from "./component/Expenses/ExpenRenderDate";
import NewExPense from "./component/NewExpenses/NewExPense";


// const App =()=>{
//
//     const expen=[
//         {
//             title: 'Car Insurance',
//             amount : 29.54,
//             date : new Date(2021,2,26),
//         },
//         {
//             title: 'Boat Insurance',
//             amount : 30.54,
//             date : new Date(2024,1,11),
//         },
//         {
//             title: 'Test Insurance',
//             amount : 40.54,
//             date : new Date(1999,4,9),
//         },
//
//     ]
//
//
//     return(
//         <div>
//
//             <ExpenRenderDate date={expen}/>
//         </div>
//     )
// }

class App extends React.Component{


    constructor(props) {
        super(props);
        this.expen=[{
            title: 'Car Insurance',
            amount : 29.54,
            date : new Date(2021,2,26),
        },
            {
                title: 'Boat Insurance',
                amount : 30.54,
                date : new Date(2021,2,26)
            },

            {
                title: 'Hwan Insurance',
                amount :40.54,
                date : new Date(2004,3,2)
            },

        ];
    }

    render() {
        return(
            <div>
                <NewExPense/>
                <ExpenRenderDate data={this.expen}/>
            </div>
        );
    }
}

export default App;