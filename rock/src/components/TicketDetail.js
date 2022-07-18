import {useEffect, useState} from "react";

export const TicketDetail =({tickets})=>{

    const [isDetail,setIsDetail]= useState(false);


    const [ticketLen,setTicketLen]= useState(0);


    const handlerChange=(e)=>{
        setIsDetail({
            isDetail : e.target.checked,
        });
    }


    useEffect(()=>{

        if(tickets.lotto){
            setTicketLen(tickets.lotto.length);
        }
    },[tickets])



    return(
        <section className="mt-6">

            <div className="flex">

                <h2 className="text-xl">
                    총{ticketLen} 개를 구매하였습니다.
                </h2>

                <div className="ml-3">번호 보기</div>

            </div>
        </section>
    );

}

