import React, { Component } from 'react';
import axios from 'axios';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      image: 'https://fontmeme.com/images/Pokemon-Logo.jpg',
      name: '', 
      pokemonId: 1,
      xp: null
    }

    this.handleClick = this.handleClick.bind( this )
    this.getNext = this.getNext.bind( this )
  }

  

  handleClick(id){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(results => {
      this.setState({
        image: results.data.sprites.front_default,
        name: results.data.name,
        xp: results.data.base_experience
      })
    })
  }

  getNext(){
    
    this.setState({
      pokemonId: this.state.pokemonId + 1
    })
    this.handleClick(this.state.pokemonId)
  }

  render() {
    
    return (
      <div className="App">
      <div className='display'>
      <img className='image' src={this.state.image} alt="Click >> to get Pokemon!"/>
        <h1>{this.state.name}</h1>
        <h3>XP: {this.state.xp}</h3>
      </div>
        
      <div> 
        <div className='buttons' onClick={() => this.handleClick(this.state.pokemonId)}>Click to get pokemon</div>
        <div className='buttons' onClick={this.getNext}>Next Pokemon</div>
      </div>
      </div>
    );
  }
}

export default App;
