import React, {useEffect} from "react";
import 'moment/locale/ko';
import moment from 'moment';
import "../../src/ui/modules.css";
import App from "../App";
const Timer=(props)=>{

    const nowTime = moment().format('YYYY년 MM월 DD일 HH시');


    const splitStr = nowTime.split(" ");

    const hour = splitStr[3];


    props.onHour(hour);

    // hour을 App으로 보내야함
    return(
        <div className="time-container">
            {nowTime}
        </div>
    )
}
export default Timer;