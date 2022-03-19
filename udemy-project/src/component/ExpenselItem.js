import React, {Component} from 'react'

import "./ExpenselItem.css"
class ExpenselItem extends React.Component{

    constructor(props) {
        super(props);

    }



    render() {
        return(

            <div>
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