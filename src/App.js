import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm so hungry working on this app...What should I eat..?
        </p>
        <p>If this app was finished, I suppose it would tell me..haha..</p>
      </header>
    </div>
    );
  }
}

export default App;
