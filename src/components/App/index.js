import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import Main from '../Main';
import reactLogo from '../../assets/react.png';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">TV Series List</h1>
        </header>
        
        <Main />
        <div style={{position:'fixed', bottom: 0, left:"45%",marginBottom:10}}>© Amit K Khanchandani. <img style={{ width: "75px", transform: "translateY(24%)"}} src={reactLogo} alt="React Logo" /></div>
        
      </div>
    );
  }
}

export default App;
