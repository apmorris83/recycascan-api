# recycascan-api
I came up with the idea for a recycling mobile app that allows a user to scan the barcode of waste packaging and inform how to recycle it. The app also has a calendar feature showing the user’s next bin collections and a map feature showing their nearest local recycling centres. Building the frontend involved learning React Native, and the backend was built using MongoDB and hosted using Heroku. I also designed the logo and graphics for the whole app.
## Running on a local machine
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
To run this project you will need node v7.4.0 installed on your machine.
### Installing
Please follow this step by step guide to get a development env running.

Clone the repo
```
git clone https://github.com/apmorris83/recycascan-api.git
```
Change into the directory
```
cd recycascan-api
```
Install dependencies
```
npm install or yarn install
```
In a separate terminal window, run the mongod command. This is the primary daemon process for the MongoDB system. It handles data requests, manages data access, and performs background management operations. 
```
mongod
```
Back in the recycascan-api terminal window, use npm test to run the tests
```
npm test
```
## Built With
* [React Native](https://facebook.github.io/react-native/) - Build native mobile apps using JavaScript and React
* [react-native-camera](https://github.com/lwansbrough/react-native-camera) - A Camera component for React Native
* [react-native-maps](https://github.com/airbnb/react-native-maps) - React Native Mapview component for iOS + Android
* [react-native-form-generator](https://github.com/MichaelCereda/react-native-form-generator) - Generate forms with native look and feel
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [MongoDB](https://www.mongodb.com/) - document database
## Author
* **Andrew Morris** - [apmorris83](https://github.com/apmorris83)
See also the list of [contributors](https://github.com/apmorris83/recycascan/graphs/contributors) who participated in this project.
