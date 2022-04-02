import logo from './logo.svg';
import './App.css';
import TodoItems from "./component/TodoItem/TodoItems";
import {search} from "./component/Weather/Fetch.js";



function App() {
    search();
  return (
    <div className="App">
      <TodoItems/>
    </div>
  );
}

export default App;
