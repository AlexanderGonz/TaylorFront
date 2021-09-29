import { createContext, useState } from "react";
import axios from "axios"
import constants from "../config/constants";
import Router from "next/router";

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [favs, setFavs] = useState([])

  //Login is triggered by clicking on LogIn navbarLink, there is no login page so it sends data directly
  // and changes the view from no user logged to user logged
  const login = async () => {
    try {
      const res = await axios.post(`${constants.url}/auth/`, {
        login: {
          nickname: 'taylor',
          pass: 'taylor'
        }
      })
      if (res.data.success) {
        setUser(res.data.user)
        setFavs(res.data.user.favs)
        localStorage.clear()
        window.localStorage.setItem('taylorAuthToken', res.data.token)
        window.localStorage.setItem('taylorUser', JSON.stringify(res.data.user))
      }
    } catch (error) {
      console.log(error);
    }
  }

  const checkLogin = () => {
    if (localStorage.taylorUser) {
      setUser(JSON.parse(localStorage.taylorUser))
      setFavs(JSON.parse(localStorage.taylorUser).favs)
    } else {
      Router.push('/')
    }

  }

  const logout = () => {
    localStorage.clear()
    setUser({})
  }

  const addFav = (id) => {
    // try {
    //   const res = await axios.put(`${constants.url}/user/addFav`, {
    //     id
    //   })
    //   if (res.data.success) {
    setFavs(prevFavs => [...prevFavs, id])
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

  }
  const removeFav = (id) => {
    // try {
    //   const res = await axios.put(`${constants.url}/user/removeFav`, {
    //     id
    //   })
    //   if (res.data.success) {
    setFavs(prepFavs => prepFavs.filter(fav => fav != id))
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

  }

  return (
    <UserContext.Provider
      value={{
        user,
        favs,
        login,
        logout,
        checkLogin,
        addFav,
        removeFav
      }}
    >
      {children}
    </UserContext.Provider>
  )

}

export { UserProvider, UserContext }


