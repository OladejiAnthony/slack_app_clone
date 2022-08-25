import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAVtVG3G3tItoaSlc_hSqL02Um5cML7H_U",
  authDomain: "slack-app-clone-331d3.firebaseapp.com",
  databaseURL: "https://slack-app-clone-331d3-default-rtdb.firebaseio.com",
  projectId: "slack-app-clone-331d3",
  storageBucket: "slack-app-clone-331d3.appspot.com",
  messagingSenderId: "1073835876403",
  appId: "1:1073835876403:web:6b926a0d6fbf3ed0d50346",
  measurementId: "G-J6944P63LR"
};


   //connecting backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //using firestore database
const auth = firebase.auth(); //authentication
const provider = new firebase.auth.GoogleAuthProvider();  //to get google services

export { auth, provider };
export default db;



// yarn add firebase-tools
//yarn add firebase


 

