import { useEffect, useContext, useState } from "react"
import axios from "axios"
import Layout from "../components/Layout"
import constants from "../config/constants"
import Card from "../components/Card"
import { RestaurantsContext } from "../contexts/restaurantsContext"
import { UserContext } from "../contexts/userContext"


const MyRestaurants = () => {
  const { restaurants, fetchFavRestaurants } = useContext(RestaurantsContext)
  const { user, checkLogin } = useContext(UserContext)
  // const router = useRouter()

  useEffect(() => {
    fetchFavRestaurants()
  }, [])

  useEffect(() => {
    checkLogin()
  }, [user])

  return (
    <Layout>
      <h1>My favourites resturants</h1>
      {restaurants && restaurants.map((restaurant) => {
        return (
          <Card key={restaurant.id} item={restaurant} />
        )
      })}
    </Layout>
  )
}

export default MyRestaurants