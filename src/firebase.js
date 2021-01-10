import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAa-qZUwu4AVGBIqNtvXnDXP-BvCtr-9B0",
  authDomain: "snapchat-clo-28675.firebaseapp.com",
  projectId: "snapchat-clo-28675",
  storageBucket: "snapchat-clo-28675.appspot.com",
  messagingSenderId: "575888642017",
  appId: "1:575888642017:web:07874d34884af481548ca0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
