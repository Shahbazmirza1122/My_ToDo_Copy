import firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBkOf_rt8gzwevA-KkJ93zvJRnJ49eQdkA",
    authDomain: "intialproject1122.firebaseapp.com",
    databaseURL: "https://intialproject1122.firebaseio.com",
    projectId: "intialproject1122",
    storageBucket: "intialproject1122.appspot.com",
    messagingSenderId: "398502944215"
  };
  firebase.initializeApp(config);
var db = firebase.firestore();



export default db;