import React from "react";
import  "../module.css"

const ItemCard=(props)=>{

    return(
        <div className="users">
            {props.children}
        </div>
    )
}

export default ItemCard;