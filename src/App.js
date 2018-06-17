import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Twitter from 'twitter';

class App extends Component {
  constructor(){
    super();
    console.log("hello world");
    this.state = {searchtxt:"",
        user:{
          id:0,
          name:"",
          imageUrl:""
        },
        tweets:[]
      };
      this.search = this.search.bind(this);
      this.showTweet = this.showTweet.bind(this);
  }

  search(){
      
    var client = new Twitter({
      consumer_key: 'WsM6Hw9RjAkOgNq9XeHR7D7AB',
      consumer_secret: 'nQJ7tX7wZSHq9AcQXL6wfXnIzpq7PR0vliS3HjSjizkvo1rbJh',
      access_token_key: '120942356-Ti37QfqpoTaZILhRcBgnBNzxpIN3DqiN0xgYydmB',
      access_token_secret: 'A589dOT1tHy6U6DMRX2XROXhQTp3e8D5rGh5ypv97hKld'
    });
    var params = {screen_name: this.state.searchtxt};
    
    client.get('statuses/user_timeline', {screen_name: this.state.searchtxt,exclude_replies:false}, ((error, tweets, response)=> {
      if (!error) {
        console.log(tweets);
        this.setState({
          tweets:tweets
      });
      }
    }).bind(this));

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

  showTweet(id){
    var client = new Twitter({
      consumer_key: 'WsM6Hw9RjAkOgNq9XeHR7D7AB',
      consumer_secret: 'nQJ7tX7wZSHq9AcQXL6wfXnIzpq7PR0vliS3HjSjizkvo1rbJh',
      access_token_key: '120942356-Ti37QfqpoTaZILhRcBgnBNzxpIN3DqiN0xgYydmB',
      access_token_secret: 'A589dOT1tHy6U6DMRX2XROXhQTp3e8D5rGh5ypv97hKld'
    });

    client.get('statuses/show', {id:id,exclude_replies:false}, ((error, data, response)=> {
      if (!error) {
        console.log(data);
        
      }
    }).bind(this));
  }

  render() {
    
    const tweetsList = this.state.tweets.map((t) =>

    <tr key={t.id}>
    <td>{t.created_at}</td>
    <td>{t.favorite_count}</td>
    <td>{t.retweet_count}</td>
    <td>{t.text}</td>
      </tr>

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
           

           <table>
             
            <tbody>
            <tr>
                 <td><b>created on</b></td>
                 <td><b>Like</b></td>
                 <td><b>Retweet</b></td>
                 <td><b>text</b></td>
               </tr>
            {tweetsList}
            </tbody>
            </table>
            
          </div>
      </div>
    );
  }
}

export default App;
