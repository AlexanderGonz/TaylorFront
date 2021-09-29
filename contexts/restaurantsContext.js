import { createContext, useState } from "react";
import axios from "axios";
import constants from '../config/constants'

const RestaurantsContext = createContext()

const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])

  const refreshRestaurants = async () => {
    try {
      const res = await axios.get(`${constants.url}/restaurant/`)
      const latestRestaurants = res.data
      setRestaurants(latestRestaurants)
    } catch (error) {
      console.log(error);
    }
  }
  const fetchFavRestaurants = async () => {
    try {
      const res = await axios.get(`${constants.url}/user/favs`)
      const latestRestaurants = res.data
      setRestaurants(latestRestaurants)
    } catch (error) {
      console.log(error);
    }
  }

  const addRestaurant = async (restaurant) => {
    try {
      const res = await axios.post(`${constants.url}/restaurant/`,
        {
          restaurant
        })
      const newRestaurant = res.data
      setRestaurants((prevRestaurants) => {
        return [newRestaurant, ...prevRestaurants]
      })
    } catch (error) {
      console.log(error);
    }
  }

  const updateRestaurant = async (updatedRestaurant) => {
    try {
      const res = await axios.put(`${constants.url}/restaurant/update`,
        {
          updatedRestaurant
        })
      setRestaurants((prevRestaurants) => {
        const existingRestaurants = [...prevRestaurants]
        const existingRestaurant = existingRestaurants.find(restaurant => restaurant.id === updateRestaurant.id)
        existingRestaurant.reviews = updateRestaurant.reviews
        return [...existingRestaurants, existingRestaurant]
      })
    } catch (error) {
      console.log(error);
    }
  }

  const deleteRestaurant = async (id) => {
    try {
      await axios.delete(`${constants.url}/restaurant`, {
        id
      })

      setRestaurants((prevRestaurants) => {
        return prevRestaurants.filter((restaurant) => restaurant.id !== id)
      })
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        refreshRestaurants,
        updateRestaurant,
        deleteRestaurant,
        addRestaurant,
        fetchFavRestaurants
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  )
}

export { RestaurantsProvider, RestaurantsContext }