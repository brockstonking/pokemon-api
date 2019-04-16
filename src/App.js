import React, { Component } from 'react';
import axios from 'axios';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      image: null,
      name: '', 
      pokemonId: 2
    }

    this.handleClick = this.handleClick.bind( this )
    this.getNext = this.getNext.bind( this )
  }

  

  handleClick(id){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(results => {
      this.setState({
        image: results.data.sprites.front_default,
        name: results.data.name
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
      <img src={this.state.image} alt="Click >> to get Pokemon!"/>
        <h1>{this.state.name}</h1>
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
