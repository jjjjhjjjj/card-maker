import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.REACT_APP_PROJECT_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
