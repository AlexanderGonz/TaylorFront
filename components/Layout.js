import { useEffect, useContext } from "react"
import { useRouter } from "next/router"
import { UserContext } from "../contexts/userContext"
import NProgress from "nprogress"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Container } from "./styles/Container.styled"

const Layout = ({ children }) => {
  const router = useRouter()
  const { checkLogin } = useContext(UserContext)

  const handleRouteChange = (url) => {
    NProgress.start()
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange)

    router.events.on('routeChangeComplete', () => NProgress.done())

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])


  return (
    <>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout