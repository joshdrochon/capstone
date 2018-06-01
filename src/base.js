import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKvJdcitlD1gy7laJhpZMFoDRbqoYNSVE",
  authDomain: "yoga-with-natali.firebaseapp.com",
  databaseURL: "https://yoga-with-natali.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
