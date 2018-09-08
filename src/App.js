import React, { Component } from 'react';
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
      <div style={{ display: 'inline-block', width: "25%" }}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>

    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ 'font-size': '54px'}}>Title</h1>
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
