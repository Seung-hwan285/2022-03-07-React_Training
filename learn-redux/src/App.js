
import './App.css';

import React, {Component} from 'react';
import AddNumRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";



function App() {
  return (
      <div className="App">
          <h1>Root</h1>
            <AddNumRoot/>
            <DisplayNumberRoot/>
      </div>
  );
}



export default App;
