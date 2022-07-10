

import {generateLottoNumbers} from "./utils/constants";
import PurchaseForm from "./components/PurchaseForm";
import React, {Component} from "react";





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

                <h1 className="text-center">🎱 행운의 로또</h1>
                <PurchaseForm setTickets={this.setTickets}/>
            </main>

        )
    }


}