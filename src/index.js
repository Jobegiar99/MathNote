import React, {Component} from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GetInput} from "./Functions/playNotes";
import InputCard from './Components/Js/InputCard'
=======
import MainMenu from './Components/Js/mainMenu';
>>>>>>> 6ae8efdabecc05febb772ff2fded32c45fe93ec1

class App extends React.Component{
  render(){
    return(
      <div>
<<<<<<< HEAD
            <InputCard/>
            <button onClick = {this.play}></button>
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}

=======
        <MainMenu/>
>>>>>>> 6ae8efdabecc05febb772ff2fded32c45fe93ec1
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