import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <h1>About this Project</h1>
      <p>
        This projects was crafted using next.js on frontend and node (typescript) on backend.
      </p>
      <h3>About Backend</h3>
      <p>
        In backend there is not persistance layer nor bbdd. There are only 2 files with mocked data: restaurants and user.
        There are routes for user, restaurant, and authentication and their corresponding services.But there are not models due to the absence of bbdd. <br />
        Both routes and services are incompleted but I have left commented code in case it could be completed in the future.
      </p>
      <p>
        About the user, the mocked data has a nickname, an encripted password and array of restaurant ids.
        And also has a checkToken middleware for JsonWebToken authentication.
      </p>
      <h3>About Frontend</h3>
      <p>
        Frontend is made in Next.js without typescript. I used a variety of methodologies in different parts of the code just for you knowing I control different ways of work. <br />
        I used  react Conxtex Api methods in most part of the project, but in restaurant profile (/restaurant/:id) I preferred to use getInitialProps.
        About styling, this project was made using style-components and it is responsive for mobile devices.
      </p>
      <p>
        On the main page a list of all restaurants is displayed, you can go to a restaurant profile with more info clicking on the name or the image.
      </p>
      <p>
        There is not a login page, failling this, I put an auto login/logout link in Navbar which changes according to if exist a user/token saved in localStorage. When loged in you can see restaurants marked as favourites by user, check/uncheck favourites restaurants and on navbar you have access to MyRestaurants page where you can see only your favourite restaurants.
      </p>
      <p>
        Restaurants and user data are fetched from Backend and a bar and spinner are emplaced on top of the page during the loading process.DELETE, and CREATE methods are not fully implemented because there is not persistance in any database. UPDATE methods (add and remove from favourites) are partially implemented, these methods are mocked and changes only on frontend through Context Api. However as well as in backed I let commented code which should work fine in a future.
      </p>
    </Layout >
  )
}


export default About