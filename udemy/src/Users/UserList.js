import React from "react";
import Card from "../UI/Card";
import ItemCard from "../UI/ItemCard";

const UserList=(props)=>{

    return(
        <ItemCard>
            <ul>
                {props.users.map((user)=>(
                    <li key={user.id}>
                        {user.name}
                        {user.age}
                    </li>
                ))
                }

            </ul>
        </ItemCard>
    )
}

export default UserList;