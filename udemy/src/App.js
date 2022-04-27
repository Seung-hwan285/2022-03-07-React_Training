import React, {useState} from 'react';
import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";


function App() {

    const [userList ,setUserList] =useState([]);

    const handlerData=(obj)=>{

        console.log(obj)
        setUserList((prevState)=>{
            return [...prevState, obj]
        });
    }

    return (
        <div>
            <AddUser onData={handlerData}/>
            <UserList users={userList}/>years old
        </div>

    );
}

export default App;
