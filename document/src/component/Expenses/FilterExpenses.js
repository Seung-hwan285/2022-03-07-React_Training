import React from "react";
import "./Filter.css"


const FilterExpenses =(props)=>{



    const yaerEvent =(e)=>{

        props.data(e.target.value);
    }
    return (
        <div>
            <div className="expenses-filter">
                <div className="expenses-filter__control">
                    <label>Filter by year</label>
                </div>

                <select value={props.selected} onChange={yaerEvent}>
                    <option value='2022'>
                        2022
                    </option>

                    <option value='2021'>
                        2021
                    </option>

                    <option value='2020'>
                        2020
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