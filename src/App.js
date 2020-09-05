
import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
      users:[],
      loading: false
    };
  }
  getUser(){
    this.setState({
      loading: true
    })
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then(response=>this.setState({
      users:response.data.results,
      loading:false
    }));
  }
componentWillMount(){
 this.getUser();
}
  render() {
    return (
      <div className="eze">
 {!this.state.loading ? ( this.state.users.map(user=>( 
   <div>
      <h1> {user.name.title}  {user.name.last}</h1>
      <h2>{user.email}</h2>
      <h2>{user.cell}</h2>
      <h2>{user.gender}</h2>
      <hr />
       </div>
       ))
       ):(
         <Loading />
         )}
      </div>
    );
  }
}

export default App;

App.propTypes = {
};

