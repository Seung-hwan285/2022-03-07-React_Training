import React from "react";

import "../../ui/modules.css"
const button=(props)=>{


    console.log(props);
    return(
            <span>
                <button className="btn">삭제</button>
                <button className="btn">수정</button>
            </span>
        )
}

export default button;