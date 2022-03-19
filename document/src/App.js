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

        ]
    }

    render() {
        return(

            <ExpenselItem title ={this.expen[0].title}
                amount ={this.expen[0].amount}
                 date = {this.expen[0].date}
            />
        );
    }
}

export default App;