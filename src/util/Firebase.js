import firebase from 'firebase/app'

let firebaseConfig = {
    apiKey: "AIzaSyD3qGCOwYSaqyjiPACGDZ0N3h9Z1mwGLw8",
    authDomain: "appmanagmentauth.firebaseapp.com",
    projectId: "appmanagmentauth",
    storageBucket: "appmanagmentauth.appspot.com",
    messagingSenderId: "471106935146",
    appId: "1:471106935146:web:ca1f33a251ee3f1f6bed13",
    measurementId: "G-R4R14G15TC"
  };
  
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);