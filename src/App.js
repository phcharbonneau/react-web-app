import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    softwares: []
  };

  async componentDidMount() {
    const response = await fetch('http://j-perf-sim-ph-wildfly10.b9ad.pro-us-east-1.openshiftapps.com/softwares');
    const body = await response.json();
    this.setState({ softwares: body, isLoading: false });
  }

  render() {
    const {softwares, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Software Asset List</h2>
            {softwares.map(software =>
              <div key={software.software}>
                {software.technology}
                {software.vendor}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
