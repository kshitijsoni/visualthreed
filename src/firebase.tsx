import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyAgbePxdBusXTwMd9omS8BVLVERNTqmZWE",
  authDomain: "skillcept-74faf.firebaseapp.com",
  projectId: "skillcept-74faf",
  storageBucket: "skillcept-74faf.appspot.com",
  messagingSenderId: "1016124352405",
  appId: "1:1016124352405:web:aa401fbfa0d329e73eb89c",
  measurementId: "G-3W0QP755F4"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth }
