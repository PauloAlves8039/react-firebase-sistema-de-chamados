import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "your-key",
    authDomain: "tickets-c8d14.firebaseapp.com",
    projectId: "tickets-c8d14",
    storageBucket: "tickets-c8d14.firebasestorage.app",
    messagingSenderId: "644359952246",
    appId: "1:644359952246:web:23c9dc8fea27e4aa314c57",
    measurementId: "G-BG6NLH84Q1"
};

const firebaseapp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };