import React, { Component } from 'react';
import './App.css';

class App extends Component {
  renderRestaurants(restaurants) {
    return(
      <div className="restaurants">
      {
        restaurants.map(restaurant => {
          return (
            <div className="restaurant">
              <h2 className="name">{ restaurant.name }</h2>
            </div>
          )
        })
      }
      </div>
    )
  }

  render() {
    const restaurants = [{ name: 'Sushi Samba' }, { name: 'The Great Wall' }]
    return (
      <div className="App">
         <h1>Bookish</h1>
        { this.renderRestaurants(restaurants) }
       </div>
    );
  }
}

export default App;
