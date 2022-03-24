import React from "react";
import FormExpenses from "./FormExpenses";
import  "./new.css"


class NewExPense extends  React.Component{

    render() {
        return(
            <div className="new-expense">
                <FormExpenses/>
            </div>

        )
    }
}

export  default NewExPense;