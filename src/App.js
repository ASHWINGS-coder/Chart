import React from 'react';
import './App.css';
import Graph from './Graph';
import Bar from './Bar';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      place: "mumbai"
    }
  }

  handelM = () => {
    this.setState({
      place: "mumbai"
    });
  }

  handelD = () => {
    this.setState({
      place: "delhi"
    });
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <button onClick={this.handelM} >Mumbai</button>
          <button onClick={this.handelD} >Delhi</button>
        </div>
        <Graph loc={this.state.place}/>
        <Bar loc={this.state.place}/>
      </div>
    );
  }
}

export default App;
