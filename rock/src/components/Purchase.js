import React, {useState} from "react";
import {LOTTO_UNIT_PRICE, MESSAGE} from "../constants";

// 로또 구입 금액을 입력하면 유효성 검사 결과 실시간 표시
    // -[x] 로또 1장의 가격이 1000 미만
    // -[x] 로또 1장의 가격이 1000으로 나누어 떨어지지 않을 경우
    // -> 예외창 출력력



const Purchase =()=>{

    const [vaildMessage,setVaild]=useState('');


    const [isInputDisabled,setisInputDisabled]=useState(false);


    const [isSubmitButtonDisabled,setIsSubmitButton]=useState(true);


    const onSubmit=(e)=>{

        e.preventDefault();

        // 입력들어오는 값
        const purchaseAmount=e.target.input.value;

        // 나머지 자릿수 -> 2345 % 1000
        const change = purchaseAmount % LOTTO_UNIT_PRICE;

        // 로또 금액 -> 구입금액 - 나머지 자릿수
        const numOfLotto =purchaseAmount - change;

        // 나머지 값이 있으면
        if(change> 0){
            alert(`입력된 금액에서 ${change}을 제외한 금액으로 로또를 구입했습니다\n`);
        }
    }


    const onChangeInput=(e)=>{

        console.log(e.target.value);

        const currentValue = e.target.value;


        // 현재 입력값이 1000보다 작으면
        if(currentValue < LOTTO_UNIT_PRICE){

            // 1000원 미만은 구입 못하게
            setVaild(MESSAGE.INVALID_PURCHASE_AMOUNT_UNDER_LOTTO_UNIT_PRICE)
            setIsSubmitButton(true);

        }else{

            setVaild('');
            setIsSubmitButton(false);
        }

    }

    return(
        <dvi>
            <form className="purchase-amount-container" onSubmit={onSubmit}>

                <label htmlFor="purchase-amount-input" className="purchase-amount-label">


                    <span className="purchase-amount-text">구입할 금액을 입력해주세요.</span>

                    <input
                        id="purchase-amount-input"
                        name="input"
                        type="number"
                        placeholder="구입 금액"
                        onChange={onChangeInput}
                    />

                </label>

                <button type="submit" className="purchase-amount-submit-button"

                        disabled={isSubmitButtonDisabled}>확인</button>
                <div>

                    {vaildMessage}
                </div>


            </form>

        </dvi>
    )
}

export default Purchase;





//
//
// export default class Purchase extends React.Component {
//
//     constructor(props) {
//
//         super(props);
//
//
//         this.state = {
//             vaildMessage: '',
//             isInputDisabled: false,
//             isSubmitButtonDisabled: true,
//         };
//
//         this.onChangeInput = this.onChangeInput.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//     }
//
//
//     onSubmit(e){
//
//         e.preventDefault();
//
//         const purchaseAmount = e.target.input.value;
//
//         // 나머지 자릿수 -> 2345 % 1000
//         const change = purchaseAmount % LOTTO_UNIT_PRICE;
//
//         // 로또 금액 -> 구입금액 - 나머지 자릿수
//         const numOfLotto = purchaseAmount - change;
//
//         // 나머지 값이 있으면
//         if(change > 0){
//
//             alert(`입력된 금액에서 ${change} 을 제외한 금액으로 로또를 구입했습니다\n`);
//
//         }
//
//     }
//
//
//     onChangeInput(e){
//
//         const currentInputValue = e.target.value;
//
//         // 현재 입력 값이 1000보다 작으면
//         if(currentInputValue < LOTTO_UNIT_PRICE){
//
//             this.setState({
//
//                 // 1000원 미만은 로또 구입 못하게
//                 vaildMessage : MESSAGE.INVALID_PURCHASE_AMOUNT_UNDER_LOTTO_UNIT_PRICE,
//                 isSubmitButtonDisabled : true,
//             });
//             return;
//         }
//
//
//         this.setState({
//             vaildMessage : '',
//             isSubmitButtonDisabled : false,
//         });
//     }
//
//
//
//
//
//     render() {
//
//         return (
//             <div>
//
//                 <form className="purchase-amount-container" onSubmit={this.onSubmit}>
//
//                     <label htmlFor="purchase-amount-input" className="purchase-amount-label">
//
//                         <span className="purchase-amount-text">구입할 금액을 입력해주세요.</span>
//
//                         <input
//                             id="purchase-amount-input"
//                             name="input"
//                             type="number"
//                             placeholder="구입 금액"
//                             onChange={this.onChangeInput}
//                         />
//
//                     </label>
//
//                     <div>
//
//                         {this.state.vaildMessage}
//
//                     </div>
//
//                 </form>
//             </div>
//         );
//     }
// }