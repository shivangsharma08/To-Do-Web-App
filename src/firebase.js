// const firebaseConfig = {
//     apiKey: "AIzaSyBAn2mgiG8zaFbfBCThDqIPRcMsroOKLYU",
//     authDomain: "todo-app-f5280.firebaseapp.com",
//     projectId: "todo-app-f5280",
//     storageBucket: "todo-app-f5280.appspot.com",
//     messagingSenderId: "284635361001",
//     appId: "1:284635361001:web:37787412dd93b245a48a78",
//     measurementId: "G-VXCJELWT7N"
//   };
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAn2mgiG8zaFbfBCThDqIPRcMsroOKLYU",
  authDomain: "todo-app-f5280.firebaseapp.com",
  projectId: "todo-app-f5280",
  storageBucket: "todo-app-f5280.appspot.com",
  messagingSenderId: "284635361001",
  appId: "1:284635361001:web:37787412dd93b245a48a78",
  measurementId: "G-VXCJELWT7N",
});

export const auth = firebase.auth();
export const db = firebaseApp.firestore();

export default firebase;
