import React, {Component} from 'react'

import "./ExpenselItem.css"
class ExpenselItem extends React.Component{

    constructor(props) {
        super(props);

        this.year = this.props.date.toLocaleString('ko-KR',{year : 'numeric'});
        this.month = this.props.date.toLocaleString('ko-KR',{ month : 'long'});
        this.day=this.props.date.toLocaleString('ko-KR',{day: '2-digit'});
    }



    render() {
        return(

            <div>
                <div>{this.month}</div>
                <div>{this.year}</div>
                <div>{this.day}</div>
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