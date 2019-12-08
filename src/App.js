import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
	    <nav class="navbar navbar-light bg-light">
		<h2>Software Asset List</h2>
	   </nav>
           
           <table className="table">
                <thead>
                  <tr>
                    <th>Version</th>
                    <th>Technology</th>
                    <th>Category</th>
                    <th>Vendor</th>
                  </tr>
                </thead>
                <tbody>
			
		    {softwares.map(software =>
			<tr key={software.version}>
                          <td>{software.version}</td>
                          <td>{software.lifecycle}</td>
	    		  <td>{software.lastFreePublicUpdateDate}</td>
	    		  <td>{software.technology}</td>
                          <td>{software.category}</td>
                          <td>{software.vendor}</td>
		      </tr>
		    )}
			            
             </tbody>
          </table>  
         
      </div>
    );
  }
}

export default App;
