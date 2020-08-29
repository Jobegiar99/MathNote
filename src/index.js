import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {playAudio} from "./Functions/audiotest.js";

class App extends React.Component{
  render(){
    return(
      <div>
        <button onClick = {playAudio}>PLAY</button>
      </div>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

