// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFUqTw75V9f9i_GLd3z8J4KSkh4vmjFqM",
  authDomain: "b9-a9-real-state-12873.firebaseapp.com",
  projectId: "b9-a9-real-state-12873",
  storageBucket: "b9-a9-real-state-12873.appspot.com",
  messagingSenderId: "434423324700",
  appId: "1:434423324700:web:2427f96d7c963037e43fd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;