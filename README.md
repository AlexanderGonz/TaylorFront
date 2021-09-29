# Technical test Tailor-hub frontend

## 1. Clone the proyect on you local machine

## 2. Install dependencies 
cd till you are in the right folder and then use 
```bash
$ npm install
```

## 3. Running locally
When instalations finish, start the server whith the script
```bash
$ npm run dev
```

This will start the server on port 3000.
This will open a tab in you default browser. Otherwise open manually <http://localhost:3000> in your browser.

# About Frontend

Frontend is made in Next.js without typescript. I used a variety of methodologies in different parts of the code just for you knowing I control different ways of work. 
I used  react Conxtex Api methods in most part of the project, but in restaurant profile (/restaurant/:id) I preferred to use getInitialProps.
About styling, this project was made using style-components and it is responsive for mobile devices.

On the main page a list of all restaurants is displayed, you can go to a restaurant profile with more info clicking on the name or the image.

There is not a login page, failling this, I put an auto login/logout link in Navbar which changes according to if exist a user/token saved in localStorage. When loged in you can see restaurants marked as favourites by user, check/uncheck favourites restaurants and on navbar you have access to MyRestaurants page where you can see only your favourite restaurants.

Restaurants and user data are fetched from Backend and a bar and spinner are emplaced on top of the page during the loading process.DELETE, and CREATE methods are not fully implemented because there is not persistance in any database. UPDATE methods (add and remove from favourites) are partially implemented, these methods are mocked and changes only on frontend through Context Api. However as well as in backed I let commented code which should work fine in a future.
