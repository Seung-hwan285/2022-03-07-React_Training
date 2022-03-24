import React from "react";
import FormExpenses from "./FormExpenses";
import  "./new.css"


const NewExPense =(props)=>{


    const expenseDate =(expen)=>{


            // 콜백함수를 복사해서 생성
        const obj={
            ...expen , id: Math.random().toString()
        }

        console.log(obj)
        // 부모로부터 전달받은 함수에서 obj을 넣음
        props.onFormData(obj);
    }




    return(

        <div className="new-expense">
            {/*props로  전달받아서  expenseDate() 호출*/}
            <FormExpenses onFormData ={expenseDate}/>
        </div>
    )
}



//
// class NewExPense extends  React.Component{
//
//
//     constructor(props) {
//         super(props);
//         this.expenseDate = this.expenseDate.bind(this);
//     }
//
//     expenseDate(expense){
//
//
//         const obj ={
//
//             ...expense , id : Math.random().toString()
//         };
//
//         console.log(obj);
//
//         this.props.onFomr(obj);
//     }
//
//     render() {
//         return(
//             <div className="new-expense">
//                 <FormExpenses onFormdata={this.expenseDate}/>
//             </div>
//
//         )
//     }
// }

export  default NewExPense;