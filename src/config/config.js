import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyDcMzMIWXQVrolAmBLmN21NOdfT4dM1iG4",
    authDomain: "net-ninja-marioplan-9ab24.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-9ab24.firebaseio.com",
    projectId: "net-ninja-marioplan-9ab24",
    storageBucket: "net-ninja-marioplan-9ab24.appspot.com",
    messagingSenderId: "81397135222",
    appId: "1:81397135222:web:f53ff977b511a78ab3ac57",
    measurementId: "G-6Z9HB64YQY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots:true});
  export default firebase;