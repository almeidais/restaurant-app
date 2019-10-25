import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDXUCNSpi5u07F76httlCTXAA4mPVQlEHs",
  authDomain: "catch-of-the-day-wes-bos-2.firebaseapp.com", //use wesbos firebase domain
  databaseURL: "https://catch-of-the-day-wes-bos-2.firebaseio.com" //use wesbos firebase URL
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
