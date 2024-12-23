// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeUlAwxj2taP6053z4yfdCgtOJFl6EvHo",
    authDomain: "website1-23cd2.firebaseapp.com",
    projectId: "website1-23cd2",
    storageBucket: "website1-23cd2.appspot.com",
    messagingSenderId: "562099941474",
    appId: "1:562099941474:web:14322ba4ee2554d263213b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth };