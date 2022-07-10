import React, {Component, useState} from "react";
import {LOTTO} from "../utils/constants";



export default class PurchaseForm extends Component {


    constructor(props) {
        super(props);


        this.state={
            purchaseInputValue:'',
        };


        this.handleSubmit=this.handleSubmit.bind(this);
        this.handlerChange=this.handlerChange.bind(this);

    }


    handleSubmit(event){
        event.preventDefault();

        const ticketCount = Math.floor(Number(this.state.purchaseInputValue) / LOTTO.UNIT_PRICE);

        this.props.setTickets(ticketCount);
        this.setState({ purchaseInputValue: '' });

        alert(`총 ${ticketCount}장을 구매하였습니다.`);
    }


    handlerChange(event){

        const purchaseInputValue =event.target.value;



        this.setState({purchaseInputValue});
    }
    
    render() {
        
        return(
            
            <form className="" onSubmit={this.handleSubmit}>
                
                <h2 className="text">구입할 금액을 입력하세요</h2>
                
                <div className="flex">
                    <label htmlFor="purchase-input" className="sr">
                        
                        구입 금액 입력란
                    </label>

                    <input
                        id="purchase-input"
                        type="number"
                        className="shadow"
                        placeholder="구입 금액"
                        onChange={this.handlerChange}


                    />

                    <button
                        type="submit"
                        className="font-bold"

                    >

                        확인
                    </button>
                </div>
            </form>
        )
    }


}




