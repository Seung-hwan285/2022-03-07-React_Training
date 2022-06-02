import React from "react";
const Try =({tryInfo})=> {


    return (

        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.res}</div>
        </li>
    );
};
// class Try extends Component{
//
//
//     render() {
//
//         return(
//
//             <li>
//                 <div>{this.props.tryInfo.try}</div>
//                 <div>{this.props.tryInfo.result}</div>
//             </li>
//
//
//
//         )
//     }


export default Try;