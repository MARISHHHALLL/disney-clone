import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyB1t5lKkNZ3nLvIcKJGiN7oZt0VGHbDOCc',
  authDomain: 'diney-clone.firebaseapp.com',
  projectId: 'diney-clone',
  storageBucket: 'diney-clone.appspot.com',
  messagingSenderId: '1023260078904',
  appId: '1:1023260078904:web:7bd34bb306df4e621ec7cd',
  measurementId: 'G-B3Z698GWEG',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
