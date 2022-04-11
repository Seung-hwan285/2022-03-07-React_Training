import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import TodoTemplate from "./components/TodoTemplate";

import TodoInput from "./components/TodoInput";


function App() {
  return (
  <div>
    <TodoTemplate>
      <TodoInput/>

    </TodoTemplate>
  </div>
  );
}

export default App;
