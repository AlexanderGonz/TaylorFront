import { useContext, useEffect, useState } from "react"
import { StyledCard } from "./styles/Card.styled"
import { UserContext } from "../contexts/userContext"
import Router from "next/router";

const Card = ({ item: { id, name, address, neighborhood, image, cuisine_type } }) => {

  const { addFav, removeFav, favs, user } = useContext(UserContext)
  const fav = favs && favs.includes(id)
  const [isLogin, setIsLogin] = useState(Object.keys(user).length > 0)
  const handleClickFav = () => {
    fav ? removeFav(id) : addFav(id)
  }
  const handleClickTitle = () => {
    Router.push('/restaurant/[id]', `/restaurant/${id}`)
  }
  useEffect(() => {
    setIsLogin(Object.keys(user).length > 0)
  }, [user])

  return (
    <StyledCard fav={fav && isLogin ? true : undefined}>
      <div>
        <h2 onClick={handleClickTitle}>{name}</h2>
        <p>{address} ({neighborhood})</p>
        <p>{cuisine_type} restaurant</p>
        {isLogin && <button onClick={handleClickFav} fav={fav} >
          {fav ? 'Remove Fav' : 'Make Fav'}
        </button>}
      </div>

      <div onClick={handleClickTitle}>
        <img src={image} alt=""></img>
      </div>
    </StyledCard>
  )
}

export default Card