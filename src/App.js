import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
  state = {
    backend: {
      status: "Not Available"
    }
  };

  async componentDidMount() {
    const response = await fetch('/actuator/health');
    const body = await response.json();
    this.setState({backend: body});
  }

  render() {
    const {backend} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Backend Status</h2>
              {Object.keys(backend).map((key, i) => (
                  <div key={i}>
                    <span>{key}: </span><span>{backend[key]}</span>
                  </div>
              ))}
            </div>
          </header>
        </div>
    );
  }
}
export default App;
