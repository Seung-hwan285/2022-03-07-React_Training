import logo from './logo.svg';
import './App.css';
import TodoItems from "./component/TodoItem/TodoItems";
import {search} from "./component/Weather/Fetch.js";
import WeatherRender from "./component/Weather/WeatherRender";



function App() {

  return (
    <div className="App">
      <TodoItems/>
        <WeatherRender/>
    </div>
  );
}

export default App;
