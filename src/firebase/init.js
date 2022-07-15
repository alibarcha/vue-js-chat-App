
// import firebase
import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDf-MR-1mHT6krNOEXJcX7Ez53nSlKsMPc",
    authDomain: "real-time-chat-app-498c0.firebaseapp.com",
    projectId: "real-time-chat-app-498c0",
    storageBucket: "real-time-chat-app-498c0.appspot.com",
    messagingSenderId: "747693643963",
    appId: "1:747693643963:web:4c6bf192c69768b1da719e",
    measurementId: "G-CB18HBBJ6X"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.firestore().settings({timestampsInsnapshots:true})
  export default firebaseApp.firestore()