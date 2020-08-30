import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MainMenu from './Components/Js/mainMenu';

class App extends React.Component{
  render(){
    return(
      <div>
        <MainMenu/>
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