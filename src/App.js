import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Twitter from 'twitter';

class App extends Component {
  constructor(){
    super();
    console.log("hello world");
    this.state = {searchtxt:""};
  }

  search(){
      
  }

  render() {

    var client = new Twitter({
      consumer_key: 'WsM6Hw9RjAkOgNq9XeHR7D7AB',
      consumer_secret: 'nQJ7tX7wZSHq9AcQXL6wfXnIzpq7PR0vliS3HjSjizkvo1rbJh',
      access_token_key: '120942356-Ti37QfqpoTaZILhRcBgnBNzxpIN3DqiN0xgYydmB',
      access_token_secret: 'A589dOT1tHy6U6DMRX2XROXhQTp3e8D5rGh5ypv97hKld'
    });
    client.get('account_activity/webhooks', {}, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      }
    });
/*
    var params = {screen_name: 'ashleeyy__7'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      }
    });

*/
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <input value={this.state.searchtxt} />
          <button onClick={this.search.bind(this)}>search</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
