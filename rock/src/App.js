import {useState} from "react";

import {PurchaseForm} from "./components/PurchaseForm";
import {TicketDetail} from "./components/TicketDetail";
import {generateLottoNumbers} from "./utils/constants";

function App(){

    const [tickets , setTickets]=useState([]);


    const handlerTicket =(ticketCount)=> {

        setTickets({

           lotto:Array.from({
               length: ticketCount
           },generateLottoNumbers)

        });
    }


    const test=()=>{
        console.log(tickets);

    }


    return(

        <main>
            <h1 className="text-center">🎱 행운의 로또</h1>

            <PurchaseForm setTickets={handlerTicket}/>

            <TicketDetail tickets={tickets} />
        </main>
    );

}



export default App;

