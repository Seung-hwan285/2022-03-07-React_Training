import React, {useEffect, useState} from 'react';

export const TicketDeatil=({tickets})=>{

    const [isDetail , seetIsDetail]= useState(false);
    const [ticketLen , setTicketLen]=useState(0);
    const handlerChange=(e)=>{

        seetIsDetail({
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


// export default class TicketDetail extends React.Component {
//
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             isDetail: false,
//         };
//
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//
//     handleChange(event) {
//         this.setState({
//             isDetail: event.target.checked,
//         });
//     }
//
//
//     render() {
//         return (
//             <section className="mt-6">
//                 <div className="flex">
//
//                     <h2 className="text">총 {this.props.tickets.length}개를 구매하였습니다.</h2>
//                     <div className="flex">
//
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }
