import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBrRy3R6xRylPfIZgOEngv3z02-fJQVdD0",
  authDomain: "starbucks-clone-b1350.firebaseapp.com",
  projectId: "starbucks-clone-b1350",
  storageBucket: "starbucks-clone-b1350.appspot.com",
  messagingSenderId: "701508163140",
  appId: "1:701508163140:web:b45f7029185328cf830e11",
  measurementId: "G-Y1R63C7WE2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
