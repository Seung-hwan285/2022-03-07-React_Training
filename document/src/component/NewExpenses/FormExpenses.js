import React, {useState} from "react";
import "./new.css"


const  FormExpenses=(props)=>{



    const [entitle , setTilte]=useState('');

    const [enmount , setAmount] =useState('');

    const [endate , setDate]= useState('');


    const handlerTitleClick=(e)=>{
        setTilte(e.target.value);
    }
    const handlerAmountClick=(e)=>{
        setAmount(e.target.value);
    }

    const handlerDateClick=(e)=>{
        setDate(e.target.value);
    }

    const handlerSubmit=(e)=>{
        e.preventDefault();

        const expendDate = {
            title : entitle,
            amount : enmount,
            date : new Date(endate),
        }


        // 부모한테 받은 props에서 input값들 넘겨줌
        props.onFormData(expendDate);

        setTilte('');
        setAmount('');
        setDate('');


    }



    return(
        <div>
        <form onSubmit={handlerSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type="text"
                    value ={entitle}
                    onChange={handlerTitleClick}
                />
            </div>

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text"
                           value={enmount}
                           onChange={handlerAmountClick}/>
                </div>
            </div>

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date"
                           value={endate}
                           max="2022-03-23" onChange={handlerDateClick}/>
                </div>
            </div>
        </div>
            <div className="new-expense__actions">
                <button type="submit">버튼</button>
            </div>
        </form>

        <div>
        </div>

        </div>

    )


}

// class FormExpenses extends  React.Component{
//
//     constructor(props) {
//         super(props);
//
//         this.state={
//             enteredTitle : '',
//             enteredAmount : '',
//             enteredDate : '',
//         }
//
//         this.handlertitle= this.handlertitle.bind(this);
//         this.hanlderAmount= this.hanlderAmount.bind(this);
//         this.hanlderDate= this.hanlderDate.bind(this);
//         this.handlerSubmit=this.handlerSubmit.bind(this);
//     }
//
//
//
//     handlertitle(e){
//         this.setState(()=>({
//                 enteredTitle : e.target.value,
//             }
//         ));
//     };
//
//
//     hanlderAmount(e){
//         this.setState(()=>(
//             {
//                 enteredAmount : e.target.value,
//             }
//         ));
//     };
//
//     hanlderDate(e){
//         this.setState(()=>(
//             {
//                 enteredDate : e.target.value,
//             }
//         ));
//
//     };
//
//     handlerSubmit(e){
//         e.preventDefault();
//         // 다시 값을 전달해줘야함
//         const expen ={
//             title : this.state.enteredTitle,
//             amount : this.state.enteredAmount,
//             date : new Date(this.state.enteredDate),
//         }
//
//         console.log(expen);
//
//
//         this.props.onFormdata(expen);
//
//
//
//         this.setState({
//             enteredTitle : '',
//             enteredAmount : '',
//             enteredDate : '',
//         });
//
//
//     }
//
//     render() {
//         return(
//             <form onSubmit={this.handlerSubmit}>
//                 <div className="new-expense__controls">
//
//                     <div className="new-expense__control">
//                         <label>Title</label>
//                         <input type="text"
//                                value={this.state.enteredTitle}
//                                onChange={this.handlertitle}/>
//                     </div>
//                 </div>
//
//                 <div className="new-expense__controls">
//                     <div className="new-expense__control">
//                         <label>Amount</label>
//                         <input type="text"
//
//                                value ={this.state.enteredAmount}
//                                onChange={this.hanlderAmount}/>
//                     </div>
//                 </div>
//                 <div className="new-expense__controls">
//                     <div className="new-expense__control">
//                         <label>Date</label>
//                         <input type="date"
//                                min="2019-01-13" max="2022-03-23"
//                                value ={this.state.enteredDate}
//                                onChange={this.hanlderDate}/>
//                     </div>
//                 </div>
//
//                 <div className="new-expense__controls">
//                     <div className="new-expense__control">
//                         <label>button</label>
//                         <button type="submit">버튼</button>
//                     </div>
//                 </div>
//
//             </form>
//         )
//     }
//
// }

export default FormExpenses;