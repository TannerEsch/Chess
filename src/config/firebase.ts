import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBS3k0y8dlN3dOryMkyIYLXaEBm0RchTTM",
    authDomain: "chess-858d8.firebaseapp.com",
    projectId: "chess-858d8",
    storageBucket: "chess-858d8.appspot.com",
    messagingSenderId: "396973670103",
    appId: "1:396973670103:web:18270a0b4c03a24f75fa92",
    measurementId: "G-M4D4X6LZ5T"
  }

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default getFirestore(app);