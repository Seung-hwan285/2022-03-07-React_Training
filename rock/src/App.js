import {useState} from "react";
import {PurchaseForm} from "./components/PurchaseForm";
import {generateLottoNumbers} from "./utils/constants";
import {TicketDeatil} from "./components/TicketDetail";

function App(){

    const [tickets , setTickets]=useState([]);


    const handlerTicket =(ticketCount)=> {

        setTickets({
           lotto:Array.from({
               length: ticketCount
           },generateLottoNumbers)

        });
    }


    return(

        <main>
            <h1 className="text-center">🎱 행운의 로또</h1>

            <PurchaseForm setTickets={handlerTicket}/>

            <TicketDeatil tickets={tickets} />
        </main>
    );

}


export default App;



//
// export default class App extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state={
//
//             tickets: [],
//         };
//
//         this.setTickets = this.setTickets.bind(this);
//     }
//
//
//     setTickets(ticketCount){
//         this.setState({
//             tickets : Array.from(
//                 {
//                     length: ticketCount}
//                 ,generateLottoNumbers)});
//     }
//
//
//     render() {
//
//         return(
//             <main>
//
//                 <PurchaseForm setTickets={this.setTickets}/>
//                 <TicketDetail tickets={this.state.tickets}/>
//
//             </main>
//         )
//     }
//
//
// }