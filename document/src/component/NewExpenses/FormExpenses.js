import React from "react";
import "./new.css"

// const  FormExpenses=(props)=>{
//
//     console.log(props);
//     return(
//
//         <form>
//         <div className="new-expense__controls">
//             <div className="new-expense__control">
//                 <label>Title</label>
//                 <input type="text"/>
//             </div>
//
//             <div className="new-expense__controls">
//                 <div className="new-expense__control">
//                     <label>Amount</label>
//                     <input type="text"/>
//                 </div>
//             </div>
//
//             <div className="new-expense__controls">
//                 <div className="new-expense__control">
//                     <label>Date</label>
//                     <input type="Date" max="2022-03-23"/>
//                 </div>
//             </div>
//         </div>
//
//             <div className="new-expense__actions">
//                 <button type="submit">버튼</button>
//             </div>
//         </form>
//     )
//
//
// }

class FormExpenses extends  React.Component{

    constructor(props) {
        super(props);
    }

    titlehandler(e){

        console.log(e.target.value);
    }

    render() {
        return(
            <form>
                <div className="new-expense__controls">

                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={this.titlehandler}/>
                    </div>
                </div>

                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="text" onChange={this.titlehandler}/>
                    </div>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-13" max="2022-03-23"/>
                    </div>
                </div>

                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>button</label>
                        <button type="submit">버튼</button>
                    </div>
                </div>

            </form>
        )
    }

}

export default FormExpenses;