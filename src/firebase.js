import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDNPrNnURlnW59P75x4zX_LlHeb0ha4XiY",
  authDomain: "auth-development-af7a1.firebaseapp.com",
  databaseURL: "http://auth-development-af7a1.firebaseio.com",
  projectId: "auth-development-af7a1",
  storageBucket: "auth-development-af7a1.appspot.com",
  messagingSenderId: "689663161465",
  appId: "1:689663161465:web:3f3f0621f3c427a94d50a8",
  measurementId: "G-KC9D84XWRY"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
