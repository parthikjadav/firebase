import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtY2puA05tnFCqPfVcUzEfQaIXfhmz4Vk",
    authDomain: "react-8-28795.firebaseapp.com",
    projectId: "react-8-28795",
    storageBucket: "react-8-28795.appspot.com",
    messagingSenderId: "478564051441",
    appId: "1:478564051441:web:648517900c54f090a53c50",
    measurementId: "G-9L8TYRFX7P"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };