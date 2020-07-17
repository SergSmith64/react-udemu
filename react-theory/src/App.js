import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center'
    }
    return (
      <div style={divStyle}>
        <h1>Hello</h1>
        <Car name={'Ford'} year={2018} />
        <Car name="Audi" year={2016} />
        <Car name={'Masda'} year={2010} />
      </div>
    );
  }
}

export default App;
