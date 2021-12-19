import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA8vHbYlwYoiaktCpDA_z1KZ9XPikap7Aw",
  authDomain: "slack-app-clone-de020.firebaseapp.com",
  databaseURL: "https://slack-app-clone-de020-default-rtdb.firebaseio.com",
  projectId: "slack-app-clone-de020",
  storageBucket: "slack-app-clone-de020.appspot.com",
  messagingSenderId: "872334749056",
  appId: "1:872334749056:web:99ebbe28dfa996280be565",
  measurementId: "G-CRWXZ57RCN"
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


 

