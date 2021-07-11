import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgTSJCeGu5s_xyRP8j2hQncoTBi008yz0",
  authDomain: "fir-d3d9c.firebaseapp.com",
  projectId: "fir-d3d9c",
  storageBucket: "fir-d3d9c.appspot.com",
  messagingSenderId: "825970822637",
  appId: "1:825970822637:web:7e0edff1a2ede604b9ebe4",
  measurementId: "G-9KS8XQ2663",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
