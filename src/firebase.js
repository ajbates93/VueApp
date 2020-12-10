import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCyx0iYnesVcyy87yXzuzAkqqaDFJ2u1Ik",
    authDomain: "vue-app-629ac.firebaseapp.com",
    projectId: "vue-app-629ac",
    storageBucket: "vue-app-629ac.appspot.com",
    messagingSenderId: "874044666352",
    appId: "1:874044666352:web:e3b32c19b5b0d572c12d35",
    measurementId: "G-CWLY7T2237"
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
    
// utils
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

// collection references 
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs

export {
    db, 
    auth, 
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}