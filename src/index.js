import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GetInput} from "./Functions/playNotes";
import InputCard from './Components/Js/InputCard'

class App extends React.Component{
  play = () =>{
    let megalovania = [
      [1,1,7,null,4.5,,null,4,,3.5,,2.5,null,1,2.5,3.5,0,0,7,null,4.5,,null,4,,3.5,,2.5,null,0,2.5,3.5,-0.5,-0.5,7,null,4.5,,null,4,,3.5,,2.5,null,-0.5,2.5,3.5],
      [-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-11,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12,-12.5,-12.5,-12.5,-12.5,-12.5,-12.5,-12.5,-12.5,-12.5,-12.5,-12.5]
    ];

    GetInput(megalovania,null,200);
  }
  render(){
    return(
      <div>
            <InputCard/>
            <button onClick = {this.play}></button>
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}

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