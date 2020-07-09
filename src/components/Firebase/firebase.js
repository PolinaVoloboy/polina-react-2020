import app from '@firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
  apiKey: "AIzaSyBF5rOpEbSYSKtJmwPA6_mfdUK3RZaPIgk",
  authDomain: "polina-react-2020.firebaseapp.com",
  databaseURL: "https://polina-react-2020.firebaseio.com",
  projectId: "polina-react-2020",
  storageBucket: '',
  messagingSenderId: "272771878008",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);
 
  users = () => this.db.ref('users');
}
export default Firebase;