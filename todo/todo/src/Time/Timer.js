import React, {useEffect} from "react";
import 'moment/locale/ko';
import moment from 'moment';
import "../../src/ui/modules.css";
const Timer=()=>{


    const nowTime = moment().format('YYYY년 MM월 DD일');

    return(
        <div className="time-container">
            {nowTime}
        </div>
    )
}
export default Timer;