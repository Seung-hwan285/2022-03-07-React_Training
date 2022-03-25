import React from "react";
import "./Filter.css"


const FilterExpenses =(props)=>{


    const yaerEvent =(e)=>{
        const value = e.target.value;
        props.data(e.target.value);
    }


    return (
        <div>
            <div className="expenses-filter">
                <div className="expenses-filter__control">
                    <label>Filter by year</label>
                </div>

                <select value={props.selected} onChange={yaerEvent}>
                    <option value='2024'>
                        2024
                    </option>

                    <option value='2021'>
                        2021
                    </option>

                    <option value='1999'>
                        1999
                    </option>

                    <option value='2005'>

                        2005
                    </option>
                </select>

                <div>
                    <div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export  default FilterExpenses;