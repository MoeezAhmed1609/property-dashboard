import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAIdqylEio3N4c0_kiVHOD_KVXqyBZ_0IM",
    authDomain: "property-5649a.firebaseapp.com",
    projectId: "property-5649a",
    storageBucket: "property-5649a.appspot.com",
    messagingSenderId: "39338272485",
    appId: "1:39338272485:web:ef3358964c97aef1a3960c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,db }