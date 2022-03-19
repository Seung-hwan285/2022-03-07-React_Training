import React, {Component} from 'react'
import ExpenselItem from "./component/ExpenselItem.js";
import ExpenRenderDate from "./component/ExpenRenderDate.js";


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
                <ExpenRenderDate data={this.expen}/>
            </div>
        );
    }
}

export default App;