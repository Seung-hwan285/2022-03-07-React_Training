import React, {Component} from 'react'

import "./ExpenselItem.css"
import ExpenDate from "./ExpenDate.js";



class ExpenselItem extends React.Component{

    constructor(props) {

        super(props);

        console.log(props.date)
    }

    render() {
        return(

            <div>

                <ExpenDate data={this.props.date}/>
                <div className="expense-item">{this.props.date.toLocaleString()}</div>

                <div className="expense-item__description">
                    <h2>{this.props.title}</h2>
                    <div className="expense-item__price">{this.props.amount}</div>
                </div>

            </div>

        );
    }
}

export default ExpenselItem;