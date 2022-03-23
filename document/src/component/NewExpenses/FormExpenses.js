import React from "react";
import "./new.css"

class FormExpenses extends  React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form>
                <div className="new-expense__controls">

                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text"/>
                    </div>
                </div>

                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="text"/>
                    </div>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="text"/>
                    </div>
                </div>

                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>button</label>
                        <button type="submit">버튼</button>
                    </div>
                </div>

            </form>
        )
    }

}

export default FormExpenses;