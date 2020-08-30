import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {GetInput} from "./Functions/playNotes";
class App extends React.Component{

  help = () =>{
    let nums = [
      [0,1,2,3,4,5,null,0,0,0],
      [10,10,10,10,0]
    ] ; 
    GetInput(nums, null,1000);
  }

  render(){  
    
    return(
      <div>
        <button onClick = {this.help}>PLAY</button>
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

