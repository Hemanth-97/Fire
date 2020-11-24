import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyB1jiNtp18o3MEHpbzQNWb0RnnYwLc460w",
    authDomain: "react-crud-7a7ea.firebaseapp.com",
    databaseURL: "https://react-crud-7a7ea.firebaseio.com",
    projectId: "react-crud-7a7ea",
    storageBucket: "react-crud-7a7ea.appspot.com",
    messagingSenderId: "358486752789",
    appId: "1:358486752789:web:cf5ce4e525fa090306181c"
  };
  // Initialize Firebase
 var fireDb = firebase.initializeApp(firebaseConfig);


export default fireDb.database().ref();