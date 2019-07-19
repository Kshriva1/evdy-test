**EVDY-TEST**

# Getting Started #

The application can be viewed here https://boiling-tundra-93571.herokuapp.com/

To start the application:

- clone this repository
- `npm install` to install all the dependencies
- `npm start` to start the local server

# Functionality #

- This application uses react and redux to make a request to the third party API  https://dev.requiemapp.com/public/memorial/random to get JSON data containing 10 memorials and to display the creationDate and the name of each memorial.

- All the memorials are sorted by creationDate. Each row below a certain row is a continuation from the upper row.

- If the first, middle or last name is undefined then it has been replaced by a empty string.

- If the button is pressed the sorting changes by the last name of the decedent.

- The memorials are shown in a form a list of card components. A Scroll component has been added to the cards to make it Scrollable.

- A Logo commponent has been added in the UI using TIlt package. The logo is tiltable if we hover over it.
