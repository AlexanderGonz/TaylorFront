import { useEffect, useContext } from "react";
import { RestaurantsContext } from "../contexts/restaurantsContext";
import Layout from "../components/Layout"
import Card from "../components/Card"
import { UserContext } from "../contexts/userContext";

const Index = () => {
  const { restaurants, refreshRestaurants } = useContext(RestaurantsContext)
  const { user, checkLogin } = useContext(UserContext)

  useEffect(() => {
    refreshRestaurants()
  }, [])

  useEffect(() => {
    checkLogin()
  }, [user])

  return (
    <Layout>
      <h1>See All Restaurants</h1>
      {restaurants && restaurants.map((restaurant) => {
        return (
          <Card key={restaurant.id} item={restaurant} />
        )
      })}
    </Layout>
  )
}


export default Index