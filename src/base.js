import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtwZGQu-O4sBHqbGtOvZ-vOLLOVxd28Kw",
  authDomain: "catch-of-the-day-570ba.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-570ba.firebaseio.com",
});


const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
