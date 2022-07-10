import {Component, useState} from 'react';
import Purchase from "./components/Purchase";
import {generateLottoNumbers} from "./utils/getRandomNumber";


export default class App extends Component {
    constructor(props) {
        super(props);



        this.state = {
            ticket:[],
        };
    }


    setTickets(ticketCount){

        this.setState({ticket:Array.from({length : ticketCount},generateLottoNumbers)})
    };



    render(){
        return(

            <main>
                <h1 className="text-center">🎱 행운의 로또</h1>

                <Purchase setTickets={this.setTickets}/>

           </main>
        )
    }
}