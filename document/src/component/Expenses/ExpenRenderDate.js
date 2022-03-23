import React, {Component} from 'react'
import ExpenselItem from "./ExpenselItem.js";
import Card from "../UI/Card.js";



// const ExpenRenderDate =(props)=>{
//
//     console.log(props);
//     return(
//         <Card className="container">
//         <div>
//
//              <ExpenselItem
//                     title ={props.date[0].title}
//                     amount ={props.date[0].amount}
//                     date={props.date[0].date}
//              />
//             <ExpenselItem
//                 title ={props.date[1].title}
//                 amount ={props.date[1].amount}
//                 date={props.date[1].date}
//             />
//             <ExpenselItem
//                 title ={props.date[2].title}
//                 amount ={props.date[2].amount}
//                 date={props.date[2].date}
//             />
//         </div>
//         </Card>
//
//
//     )
// }

class ExpenRenderDate extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <Card className="container">

                <ExpenselItem
                    title={this.props.data[0].title}
                    amount={this.props.data[0].amount}
                    date={this.props.data[0].date}
                />

                <ExpenselItem
                    title={this.props.data[1].title}
                    amount={this.props.data[1].amount}
                    date={this.props.data[1].date}
                />
                <ExpenselItem
                    title={this.props.data[2].title}
                    amount={this.props.data[2].amount}
                    date={this.props.data[2].date}
                />
                </Card>

            </div>

        );
    }

}


export default ExpenRenderDate;