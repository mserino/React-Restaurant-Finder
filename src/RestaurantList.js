import React from 'react';

function RestaurantList({ restaurants }) {
  return (
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

export default RestaurantList
