import React from 'react';
import ReactDOM from 'react-dom';
import ProjectList from '../src/Apps/ProjectList';
import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyC1N3vI9uKfj3BkAqWscz9rxPf5eGio4jU",
    authDomain: "sabaka-pm.firebaseapp.com",
    databaseURL: "https://sabaka-pm.firebaseio.com",
    storageBucket: "sabaka-pm.appspot.com",
    messagingSenderId: "678455534130"
  };
  firebase.initializeApp(config);

var Projects = [];
var Associate = [];
var database = firebase.database().ref().child("Projects");
database.on('value', snap => {
  let dataFromServer = snap.val();
  Projects = [];
  for (let key in dataFromServer) {
      Projects.push(dataFromServer[key])
      let uniq = dataFromServer[key]
      Associate.push({uniq: key, id: dataFromServer[key].id})
  }
  ReactDOM.render(
      <ProjectList initialData={Projects} Associate={Associate}/>,
  document.getElementById('root')
  );
})



















// var Projects = [
//   {
//     id: 0,
//     title: "First Project",
//     users: [
//             {
//               id: 0,
//               name: "John"
//             },
//             {
//               id: 1,
//               name: "Anna"
//             }
//           ]
//   },
//   {
//     id: 1,
//     title: "Second Project",
//         users: [
//             {
//               id: 0,
//               name: "Lox"
//             },
//             {
//               id: 1,
//               name: "Pidar"
//             }
//           ]
//   } 
// ];