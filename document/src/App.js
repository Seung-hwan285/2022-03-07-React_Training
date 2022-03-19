import React, {Component} from 'react'
import ExpenselItem from "./component/ExpenselItem.js";


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
                <ExpenselItem
                    title={this.expen[0].title}
                    amount={this.expen[0].amount}
                    date={this.expen[0].date}/>

                <ExpenselItem
                    title={this.expen[1].title}
                    amount={this.expen[1].amount}
                    date={this.expen[1].date}/>

                <ExpenselItem
                    title ={this.expen[2].title}
                    amount={this.expen[2].amount}
                    date={this.expen[2].date}/>
            </div>
        );
    }
}

export default App;