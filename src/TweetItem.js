import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Twitter from 'twitter';

class TweetItem extends Component {
  constructor(){
    super();
  }

  search(){
      
    var client = new Twitter({
      consumer_key: 'WsM6Hw9RjAkOgNq9XeHR7D7AB',
      consumer_secret: 'nQJ7tX7wZSHq9AcQXL6wfXnIzpq7PR0vliS3HjSjizkvo1rbJh',
      access_token_key: '120942356-Ti37QfqpoTaZILhRcBgnBNzxpIN3DqiN0xgYydmB',
      access_token_secret: 'A589dOT1tHy6U6DMRX2XROXhQTp3e8D5rGh5ypv97hKld'
    });
    var params = {screen_name: this.state.searchtxt};
    
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      }
    });

    client.get('users/show', params, this.UpdateuserInfo.bind(this));
    
  }

  UpdateuserInfo(error, data, response) {
    if (!error) {
      console.log(data);

    this.setState({
      user:{
        id:data.id,
        name:data.name,
        imageUrl:data.profile_image_url
      }
  });
      
    }
  }

  handleChange(event) {
    this.setState({searchtxt: event.target.value});
  }

  render() {
    
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
          {number}
        </li>
      )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          
        <input type="text" value={this.state.searchtxt} onChange={this.handleChange.bind(this)} />
        <button onClick={this.search}>search</button>
        </p>
        <div>
          <table>
            <tbody>
            <tr key="t_name"> <td>Name: </td><td>{this.state.user.name}</td> </tr>
            <tr key="t_id"> <td>ID: </td><td>{this.state.user.id}</td> </tr>
            <tr key="t_img"> <td>profile: </td><td> <img src={this.state.user.imageUrl} alt=""></img> </td> </tr></tbody>
            </table>
          </div>
      </div>
    );
  }
}

export default App;
