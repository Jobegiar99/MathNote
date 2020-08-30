import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {GetInput} from "./Functions/playNotes";
import InputCard from './Components/Js/InputCard'
import {MakeMatrix} from "./Functions/matrix";

class App extends React.Component{
  play = () =>{
    /*let megalovania = [
      [1,1,7,null,4.5,,null,4,,3.5,,2.5,null,1,2.5,3.5,0,0,7,null,4.5,,null,4,,3.5,,2.5,null,0,2.5,3.5,-0.5,-0.5,7,null,4.5,,null,4,,3.5,,2.5,null,-0.5,2.5,3.5],
      [-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12.5,-12.5,-12.5,-12.5,-12.5,-12.5,-12.5,-12.5,-12.5,-12.5,-12.5]
    ];*/
    let test =[
      [[2,3,5],1,10,1]
    ]
   MakeMatrix(test);
  }
  render(){
    return(
      <div>
        <button onClick = {this.play}></button>
        
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