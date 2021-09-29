
import { useRouter } from "next/router";
import axios from "axios";
import constants from "../../config/constants"
import Layout from "../../components/Layout";
import { StyledCard } from "../../components/styles/Card.styled"


const RestaurantProfile = ({ restaurant }) => {
  const router = useRouter()
  const { name, image, address, neighborhood, cuisine_type, operating_hours, reviews } = restaurant
  const { id } = router.query

  return (
    <Layout>
      <h1>Restaurant Profile</h1>
      <StyledCard>
        <div>
          <img src={image} alt=""></img>
        </div>
        <div>
          <h1>{name}</h1>
          <p>{address} ({neighborhood})</p>
          <p>{cuisine_type} restaurant</p>
          <p>Operating hours:</p>
          <ul>
            {Object.keys(operating_hours).map((day, index) => {
              return <li key={index}> <span>{day}: </span>{operating_hours[day]}</li>
            })}
          </ul>
        </div>
      </StyledCard>
      <h3> Reviews: </h3>
      {reviews && reviews.map((rvw, index) => {
        return (
          <StyledCard key={index}>
            <div>
              <h3>{rvw.name}</h3>
              <p>Rating: {rvw.rating}</p>
              <p>{rvw.date}</p>
            </div>
            <div>
              <p>{rvw.comments}</p>
            </div>
          </StyledCard>
        )
      })}
    </Layout>
  )
}

RestaurantProfile.getInitialProps = async (ctx) => {
  const res = await axios.get(`${constants.url}/restaurant/${ctx.query.id}`)
  const data = res.data[0]
  return { restaurant: data }
}

export default RestaurantProfile