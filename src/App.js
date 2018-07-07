import React, { Component } from 'react';
import './App.css';
import RestaurantList from './RestaurantList';

class App extends Component {

  render() {
    const restaurants = [{ name: 'Sushi Samba' }, { name: 'The Great Wall' }]
    return (
      <div className="App">
         <h1>Restaurant Finder</h1>
        <RestaurantList restaurants={ restaurants } />
       </div>
    );
  }
}

export default App;
