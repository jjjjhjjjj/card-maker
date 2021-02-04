import firebase from "firebase";
import firebaseApp from "./firebase";

class Auth {
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebaseApp.auth().signInWithPopup(provider);
  }
}

export default Auth;
