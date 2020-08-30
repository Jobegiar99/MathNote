import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {GetInput} from "./Functions/playNotes";
import InputCard from './Components/Js/InputCard'

class App extends React.Component{
  render(){
    return(
      <InputCard/>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);