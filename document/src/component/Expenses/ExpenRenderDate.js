import React, {useState} from 'react'
import ExpenselItem from "./ExpenselItem.js";
import Card from "../UI/Card.js";
import FilterExpenses from "./FilterExpenses";


const ExpenRenderDate =(props)=>{

    const [filter , setFilter] =useState('2020');


    const channgeYear=(e)=>{
        setFilter(e);
    }


    return(
        <div>
            <Card className="container">
            {/*props 로 함수를 호출 */}
            <FilterExpenses selected={filter} data={channgeYear}/>

                {props.data.map(($el)=> <ExpenselItem

                    title ={$el.title}
                    amount ={$el.amount}
                    date = {$el.date}
                    key = {$el.id}
                />)}



            </Card>
        </div>

    );
}



// class ExpenRenderDate extends React.Component{
//
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return(
//             <div>
//
//                 <Card className="container">
//
//                 <ExpenselItem
//                     title={this.props.data[0].title}
//                     amount={this.props.data[0].amount}
//                     date={this.props.data[0].date}
//                 />
//
//                 <ExpenselItem
//                     title={this.props.data[1].title}
//                     amount={this.props.data[1].amount}
//                     date={this.props.data[1].date}
//                 />
//                 <ExpenselItem
//                     title={this.props.data[2].title}
//                     amount={this.props.data[2].amount}
//                     date={this.props.data[2].date}
//                 />
//                 </Card>
//             </div>
//         );
//     }
//
// }


export default ExpenRenderDate;