const CountItem =(props)=>{
    return(
        <span className="count-container">총 개수 : {props.items.length}</span>
    )
}

export  default  CountItem;