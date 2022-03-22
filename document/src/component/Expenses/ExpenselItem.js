import React, {Component, useState} from 'react'

import "./ExpenselItem.css"
import ExpenDate from "./ExpenDate.js";





class ExpenselItem extends React.Component{

    constructor(props) {

        super(props);

        // state 초기값 설정
        this.state={
            uptitle:'제목',
        }

        this.clickEvent = this.clickEvent.bind(this);
    }


    clickEvent() {
        
        this.setState(()=>({
            uptitle : 'fdsafdas',
        }));
        console.log(this.state.uptitle);
    }


    render() {
        return(

            <div>

                <ExpenDate data={this.props.date}/>
                <div className="expense-item">{this.props.date.toLocaleString()}</div>

                <div className="expense-item__description">
                    <h2>{this.state.uptitle}</h2>
                    <div className="expense-item__price">{this.props.amount}</div>
                </div>
                <button onClick={this.clickEvent}>Change Title</button>
            </div>

        );
    }
}

export default ExpenselItem;