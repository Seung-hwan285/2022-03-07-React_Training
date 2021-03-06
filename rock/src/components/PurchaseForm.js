import React, {Component, useState} from "react";
import {LOTTO} from "../utils/constants";
export const PurchaseForm=(props)=>{

    const [purchaseInputValue,setPurchaseInputValue]=useState('');

    const handlerSubmit=(e)=>{
        e.preventDefault();

        const ticketCount =Math.floor(Number(purchaseInputValue)/LOTTO.UNIT_PRICE);

        props.setTickets(ticketCount);

        setPurchaseInputValue('');

        alert(`총 ${ticketCount}장을 구매하였습니다`);
    }


    const handlerChange=(e)=>{
        const purchaseInput =e.target.value;

        setPurchaseInputValue(purchaseInput);
    }



    return(
        <section>
        <form className="" onSubmit={handlerSubmit}>

        <h2 className="text">로또 구입할 금액을 입력하세요</h2>

        <div className="flex">
            <label htmlFor="purchase-input" className="sr">
                구입 금액 입력란
            </label>


            <input
                id="purchase-input"
                type="number"
                className="shadow"
                placeholder="구입 금액"
                onChange={handlerChange}/>

            <button type="submit" className="font-bold">확인</button>
        </div>

        </form>

        </section>
    )
}
