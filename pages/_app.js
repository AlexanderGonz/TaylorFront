import { RestaurantsProvider } from "../contexts/restaurantsContext";
import { UserProvider } from "../contexts/userContext";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";

const theme = {
  colors: {
    primary: '#7b7fda',
    secondary: '#67bc98',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <UserProvider>
          <RestaurantsProvider>
            <Component {...pageProps} />
          </RestaurantsProvider>
        </UserProvider>
      </>
    </ThemeProvider>
  )
}

export default MyApp