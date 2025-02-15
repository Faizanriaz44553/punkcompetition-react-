
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged  , deleteUser } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBasRlbFA3EAZR09NDerdQRwexZQyebnM0",
  authDomain: "punk-competition.firebaseapp.com",
  projectId: "punk-competition",
  storageBucket: "punk-competition.appspot.com",
  messagingSenderId: "634058391419",
  appId: "1:634058391419:web:a19b9dbf146d6d760847de",
  measurementId: "G-3EXKSPKS8D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage, auth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged  , deleteUser };
