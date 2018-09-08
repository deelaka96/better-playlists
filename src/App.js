import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Aggregates extends Component {
  render() {
    return (
      <div style={{ width: "40%", display: 'inline-block' }}>
        <h2 >Number Text</h2>
      </div>
    );
  }
}
class Filter extends Component {
  render() {
    return (
      <div>
        <img />
        <input type="text" />
      </div>
    );
  }
}
class Playlist extends Component {
  render() {
    return (
      <div  style={{display:'inline-block',width:"25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>

    );
  }
}
class App extends Component {
  render() {
    let name = 'Deelaka'
    let green = '#ff1212'
    let headerStyle = { color: green, 'font-size': '50px' }
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregates />
        <Aggregates />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
