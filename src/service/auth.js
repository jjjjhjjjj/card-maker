import firebase from "firebase";
import firebaseApp from "./firebase";

class Auth {
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebaseApp.auth().signInWithPopup(provider);
  }

  logout() {
    return firebase.auth().signOut();
  }

  onAuthState(onUserChange) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChange(user);
    });
  }
}

export default Auth;
