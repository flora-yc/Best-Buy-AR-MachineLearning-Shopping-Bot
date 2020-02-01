import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ChatUx} from 'chatux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

const chatux = new ChatUx();

chatux.init({
  api: {
      endpoint: 'https://bryan-qna-service-bot.azurewebsites.net/api/messages',//chat server
      method: 'GET',//HTTP METHOD when requesting chat server
      dataType: 'json'//json or jsonp is available
  }
});

chatux.start();
