import logo from './logo.svg';
import './App.css';
import TodoItems from "./component/TodoItem/TodoItems";

import {useState} from "react";
import Form from "./component/Weather/Form";


function App() {




  return (
    <div className="App">
        <h3>Weahter App</h3>

        <Form/>
        <TodoItems/>

    </div>
  );
}

export default App;
