import React, {Component} from "react";
//import {PurchaseForm} from "./components/PurchaseForm";
import TicketDetail from "./components/TicketDetail";
import {PurchaseForm} from "./components/PurchaseForm";

export default class App extends Component {



    constructor(props) {
        super(props);

        this.state={

            tickets: [],
        };

        this.setTickets = this.setTickets.bind(this);
    }

    setTickets(ticketCount){
        this.setState({tickets : Array.from({length: ticketCount})})
    }

    render() {

        return(

            <main>

                <PurchaseForm setTickets={this.setTickets}/>
                <TicketDetail tickets={this.state.tickets}/>
            </main>


        )
    }


}