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
        <section>
            <div className="flex justify-between mb-2">

                <h2 className="text">
                    총 {ticketLen}개를 구매하였습니다.
                </h2>


                <div className="flex items-center cursor-pointer">


                    <div className="relative">

                        <input type="checkbox" onChange={handlerChange}/>

                        <div className="font-medium">번호 보기</div>
                    </div>





                    <div>


                    </div>

                </div>
            </div>

        </section>
    )
}

