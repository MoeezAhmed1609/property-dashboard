import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAwUenqc5J4mvvZfEBmLfkz-fblU3VWV8c",
  authDomain: "property-ab531.firebaseapp.com",
  projectId: "property-ab531",
  storageBucket: "property-ab531.appspot.com",
  messagingSenderId: "539379909429",
  appId: "1:539379909429:web:8dcb58d806872260d2027c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage }