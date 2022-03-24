import React, {Component, useState} from 'react'

import "./ExpenselItem.css"
import ExpenDate from "./ExpenDate.js";
import Card from "../UI/Card.js";



const ExpenselItem = (props) => {


    const  [title, setTitle] = useState(props.title);


    const clickEvent=()=>{
        setTitle('Updated!');
    };

    return (
        <div>
            <Card className='expense-item'/>
            <ExpenDate data={props.date}/>
            <div className="expense-item">{props.date.toLocaleString()}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>

            <button onClick={clickEvent}>버튼</button>
        </div>
    )
}


// class ExpenselItem extends React.Component{
//
//     constructor(props) {
//         console.log(props.date);
//         super(props);
//
//
//         this.state={
//             uptitle:props.title,
//         }
//
//         // this.clickEvent = this.clickEvent.bind(this);
//         //this.clickReset= this.clickReset.bind(this);
//     }
//
//
//     clickEvent() {
//         this.setState(()=>({
//             uptitle : 'Updated!',
//         }));
//
//         console.log(this.state.uptitle);
//     }
//
//     clickReset(){
//         this.setState(()=>({
//             uptitle : this.props.title,
//         }));
//     }
//
//     render() {
//         return(
//
//             <div>
//                 <ExpenDate data={this.props.date}/>
//                 <div className="expense-item">{this.props.date.toLocaleString()}</div>
//
//                 <div className="expense-item__description">
//                     <h2>{this.state.uptitle}</h2>
//                     <div className="expense-item__price">{this.props.amount}</div>
//                 </div>
//                 <button onClick={()=>this.clickEvent()}>Change Title</button>
//                 <button onClick={()=>this.clickReset()}>Reset</button>
//
//
//             </div>
//
//         );
//     }
// }

export default ExpenselItem;