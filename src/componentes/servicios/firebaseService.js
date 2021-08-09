import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBChKyxy4BndG8YutOD0TzklMfesynQy_Y",
    authDomain: "losdosnogales.firebaseapp.com",
    projectId: "losdosnogales",
    storageBucket: "losdosnogales.appspot.com",
    messagingSenderId: "759676318973",
    appId: "1:759676318973:web:3afd54d41d500865077a94"
  };
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
      return app
}

export function getFirestore(){
    return firebase.firestore(app)
}