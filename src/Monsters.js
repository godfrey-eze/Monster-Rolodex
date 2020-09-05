import React, { Component } from 'react';
import { CardList } from "./card-list/Card-list-component";
import { SearchBox } from "./card-list/search/searchBox";
import './App.css'
class Monster extends Component {
  constructor(props) {
    super(props);
    this.state = {
       monsters: [],
       searchField:"" 
      };
  }
componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then(user=>this.setState({
        monsters:user
    }) )
   
}
handleChange =(e)=>{
  this.setState({searchField:e.target.value})
}
  render() {
    const {monsters,searchField} = this.state;
    const filteredMonster = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='eze'>
      <h1>Monsters Rolodex</h1>
      <SearchBox
      placeholder="search monster"
      handleChange={this.handleChange}
       />
<CardList monsters={filteredMonster} />
      
      </div>
    );
  }
}

export default Monster;

Monster.propTypes = {
};