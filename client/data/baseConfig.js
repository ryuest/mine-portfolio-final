import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBS87dEg0heswfD72YayVecTGVJlgLIyy0",
  authDomain: "mine-portfolio.firebaseapp.com",
  databaseURL: "https://mine-portfolio.firebaseio.com",
  projectId: "mine-portfolio",
  storageBucket: "mine-portfolio.appspot.com",
  messagingSenderId: "898890413816"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export let database = firebase.database();
