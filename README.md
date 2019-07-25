# Getting Started #

The application can be viewed here  https://safe-hamlet-93839.herokuapp.com

To start the application:

- clone this repository
- `npm install` to install all the dependencies
- `npm start` to start the local server

# Functionality #

- This application uses react and redux to make a request to the third party API  https://dev.requiemapp.com/public/memorial/random to get JSON data containing 10 memorials and to display the creationDate and the name of each memorial.

- All the memorials are sorted by creationDate. Each row below a certain row is a continuation from the upper row.

- The request to the API is made in the redux action which is called in the useEffect hook in the App component. UseState hook is used to maintain the component level state.

- Axios package is used to make a GET request to the API. 

- The unix dates fetched from the API are converted into M/D/YYYY HH:mm:ss format in the UI.

- The memorials can be searched using date in the format M/D/YYYY in the searchbox. Only those memorials whose dates match with that entered in the searchbox will be displayed.

- Particles.js package is used for the background design in the UI.

- This application uses tachyons which is a CSS toolkit and is fast, readable and completely responsive. It reduces the amount of CSS we write in our application and we can add styles in our components using just class names.

- If the first, middle or last name is undefined then it has been replaced by a empty string.

- If the button is pressed the sorting changes by the last name of the decedent.

- The memorials are shown in a form a list of card components. A Scroll component has been added to the cards to make it scrollable.

- A Logo commponent has been added in the UI using the react-tilt package. The logo is tiltable if we hover over it.
