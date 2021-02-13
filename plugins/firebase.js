import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


const firebaseConfig = {
  apiKey: "AIzaSyA3_4sK1lZ83yO6S3CQKGf6yTapK5rwygQ",
  authDomain: "nuxt-prueba-dfe53.firebaseapp.com",
  projectId: "nuxt-prueba-dfe53",
  storageBucket: "nuxt-prueba-dfe53.appspot.com",
  messagingSenderId: "32869281529",
  appId: "1:32869281529:web:f58a5e5fe8a0cd38e27c28"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage }